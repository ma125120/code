import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import './App.css';
import imgList from "./data/img.js";

var imgDatas=(function() {
  let list=[];
  imgList.forEach((v,i)=> {
    let _list=v;
    _list.url=require("./img/"+v.fileName);
    list[i]=_list;
  });
  return list;
})();

class ControllerUnit extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };
 handleClick(e){
    if (this.props.arrange.isCenter){
      this.props.inverse();
    }else {
      this.props.center();
    }
    e.stopPropagation();
    e.preventDefault();
  }
  render() {
    var controllerClassName = 'controller_unit';
    if(this.props.arrange.isCenter){
      controllerClassName += ' is_center';
    }
    if (this.props.arrange.isInverse){
      controllerClassName += ' is_inverse';
    }
    return (
        <span className={controllerClassName} onClick={this.handleClick}></span>
      )
  }
}

class ImgFigure extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick(e) {
    if(this.props.arrange.isCenter) {
      this.props.inverse();
    } else {
      this.props.center();
    }   
    e.preventDefault();
    e.stopPropagation(); 
  };
  render() {
    var styleObj={},{pos,rotate,isInverse,isCenter}=this.props.arrange;
    /*位置信息*/
    if(pos) {
      styleObj=pos;
    }
    /*旋转角度*/
    if(rotate) {
      (['MozTransform','WebkitTransform','msTransform','transform']).forEach((v)=>{
        styleObj[v]='rotate('+rotate+'deg)';
      });
    }
    /*是否反转*/
    var imgFigureClassName="img_figure";
        imgFigureClassName+=isInverse?' is_inverse':'';
    if(isCenter){
      styleObj.zIndex=11;
    }
    return (
      <figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>
        <img src={this.props.data.url} alt={this.props.data.title} />
        <figcaption>
          <h2 className="img_title">{this.props.data.title}</h2>
          <div className="img_back" onClick={this.handleClick}>
            <p>
              {this.props.data.desc}
            </p>
          </div>
        </figcaption>
      </figure>
    );  
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArr:[

      ]
    };
  }

  Constant={  
    centerPos:{
      left:0,
      top:0
    },
    hPosRange:{
      leftSecX:[0,0],
      rightSecX:[0,0],
      y:[0,0]
    },
    vPosRange:{
      topY:[0,0],
      x:[0,0]
    }
  };
  /*
  *获取区间内的随机值
   */
  getRandom(min,max) {
    return Math.ceil(Math.random()*(max-min)+min);
  };
  /*
  *翻转图片
  *@param index 输入当前被执行inverse操作的图片对应的图片信息数组的index值
  *@return {Function} 这是一个闭包函数，其内return一个真正等待被执行的函数
   */
  inverse(index) {
    return ()=>{
      var imgArr=this.state.imgArr;
      imgArr[index].isInverse=!imgArr[index].isInverse;
      this.setState({
        imgArr:imgArr
      });
    }
  };
  /*
  *重新布局所有图片
  *@param centerIndex 指定居中排布图片的索引
   */
  rearrange(centerIndex) {
    var [imgArr,Constant,getRandom]=[this.state.imgArr,this.Constant,this.getRandom],
        {centerPos,hPosRange,vPosRange}=Constant,
        {leftSecX,rightSecX,y}=hPosRange,
        {topY,x}=vPosRange,

        imgTopArr=[],
        topImgNum=Math.ceil(Math.random()*2),
        topImgSliceIndex=0,

        imgCenterArr=imgArr.splice(centerIndex,1);

        //首先居中centerIndex
        imgCenterArr[0]={
          pos:centerPos,
          rotate:0,
          isCenter:true
        };
        //取出要布局上侧的图片的状态信息
        topImgSliceIndex=Math.ceil(Math.random()*(imgArr.length-topImgNum));
        imgTopArr=imgArr.splice(topImgSliceIndex,topImgNum);
        
        //布局位于上侧的图片
        imgTopArr.forEach((v,i)=> {
          imgTopArr[i]={
            pos:{
              top:getRandom(topY[0],topY[1]),
              left:getRandom(x[0],x[1])
            },
            rotate:getRandom(-30,30),
            isCenter:false
          }
        });
        //布局左右两侧的图片
        for(let i=0,len=imgArr.length,k=len/2;i<len;i++) {
          let hPosRangeLORX=null;
          if(i<k) {
            hPosRangeLORX=leftSecX;
          } else {
            hPosRangeLORX=rightSecX;
          }

          imgArr[i]={
            pos:{
              top:getRandom(y[0],y[1]),
              left:getRandom(hPosRangeLORX[0],hPosRangeLORX[1])
            },
            rotate:getRandom(-30,30),
            isCenter:false
          }
        }
        if(imgTopArr&&imgTopArr[0]) {
          imgArr.splice(topImgSliceIndex,0,imgTopArr[0]);
        }

        imgArr.splice(centerIndex,0,imgCenterArr[0]);

        this.setState({
          imgArr:imgArr
        });        
  };
  /*
  *利用rearrange函数居中对应index的图片
  *@param index,需要悲剧中图片的index
  *@return {Function}
   */
  center(index) {
    return ()=> {
      this.rearrange(index);
    }
  };
  componentDidMount() {
    var stageDOM=findDOMNode(this.refs.stage),
        stageW=stageDOM.scrollWidth,
        stageH=stageDOM.scrollHeight,
        halfStageW=Math.ceil(stageW/2),
        halfStageH=Math.ceil(stageH/2);
    var imgFigureDOM=findDOMNode(this.refs.imgFigure0),
        imgW=imgFigureDOM.scrollWidth,
        imgH=imgFigureDOM.scrollHeight,
        halfImgW=Math.ceil(imgW/2),
        halfImgH=Math.ceil(imgH/2);

    this.Constant.centerPos.left=halfStageW-halfImgW;
    this.Constant.centerPos.top=halfStageH-halfImgH;
    
    //水平方向
    this.Constant.hPosRange.leftSecX[0]=-halfImgW;
    this.Constant.hPosRange.leftSecX[1]=halfStageW-halfImgW*3;
    this.Constant.hPosRange.rightSecX[0]=halfStageW+halfImgW;
    this.Constant.hPosRange.rightSecX[1]=stageW-halfImgW;
    this.Constant.hPosRange.y[0]=-halfImgH;
    this.Constant.hPosRange.y[1]=stageH-halfImgH;
    //计算上册区域图片的排布范围
    this.Constant.vPosRange.topY[0]=-halfImgH;
    this.Constant.vPosRange.topY[1]=halfStageH-halfImgH*3;
    this.Constant.vPosRange.x[0]=halfStageW-imgW;
    this.Constant.vPosRange.x[1]=halfStageW;
    
    this.rearrange(0);

  };
  render() {
    var controlUnits=[],imgFigures=[],reactid=0;
    imgDatas.forEach((v,i)=>{
      if(!this.state.imgArr[i]) {
        this.state.imgArr[i]={
          pos:{
            left:0,
            top:0
          },
          rotate:0,
          isInverse:false,
          isCenter:false
        }
      }
      imgFigures.push(<ImgFigure data={v} key={'img_'+reactid++} ref={'imgFigure'+i} arrange={this.state.imgArr[i]}
       inverse={this.inverse(i)} center={this.center(i)} />);

      controlUnits.push(<ControllerUnit key={'control_'+reactid} arrange={this.state.imgArr[i]} inverse={this.inverse(i)} center={this.center(i)} />);
    });
    return (
      <section className="stage" ref="stage">
        <section className="img_sec">
          {imgFigures}
        </section>
        <nav className="controller_nav">
          {controlUnits}
        </nav>
      </section>
    );
  }
}

export default App;
