~function (){
/*    var effect={//这一组对象里都是存放如何去计算当前位置的公式
        linear:function (t,b,c,d) {
            return b+(t/d)*c;
        },
        
    };*/
    var mEffect = {
        //����
        Linear: function (t, b, c, d) {
            return c * t / d + b;
        },
        //ָ��˥���ķ�������
        Bounce: {
            easeIn: function (t, b, c, d) {
                return c - mEffect.Bounce.easeOut(d - t, 0, c, d) + b;
            },
            easeOut: function (t, b, c, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                }
            },
            easeInOut: function (t, b, c, d) {
                if (t < d / 2) {
                    return mEffect.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
                }
                return mEffect.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        },
        //���η��Ļ���
        Quad: {
            easeIn: function (t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOut: function (t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t + b;
                }
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            }
        },
        //���η��Ļ���
        Cubic: {
            easeIn: function (t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOut: function (t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t + b;
                }
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            }
        },
        //�Ĵη��Ļ���
        Quart: {
            easeIn: function (t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            },
            easeOut: function (t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t * t + b;
                }
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            }
        },
        //��η��Ļ���
        Quint: {
            easeIn: function (t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOut: function (t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t * t * t + b;
                }
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            }
        },
        //�������ߵĻ���
        Sine: {
            easeIn: function (t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            },
            easeOut: function (t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeInOut: function (t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            }
        },
        //ָ�����ߵĻ���
        Expo: {
            easeIn: function (t, b, c, d) {
                return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOut: function (t, b, c, d) {
                return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOut: function (t, b, c, d) {
                if (t == 0) return b;
                if (t == d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        },
        //Բ�����ߵĻ���
        Circ: {
            easeIn: function (t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOut: function (t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            },
            easeInOut: function (t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                }
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            }
        },
        //������Χ�����η�����
        Back: {
            easeIn: function (t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOut: function (t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOut: function (t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                if ((t /= d / 2) < 1) {
                    return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                }
                return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
            }
        },
        //ָ��˥�����������߻���
        Elastic: {
            easeIn: function (t, b, c, d, a, p) {
                if (t == 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                var s;
                !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOut: function (t, b, c, d, a, p) {
                if (t == 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                var s;
                !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
                return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
            },
            easeInOut: function (t, b, c, d, a, p) {
                if (t == 0) return b;
                if ((t /= d / 2) == 2) return b + c;
                if (!p) p = d * (.3 * 1.5);
                var s;
                !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
                if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
            }
        }
    };
    /**
     * 
     * @param curEle 需要运动的元素
     * @param target Object 需要运动的终点 
     * @param duration 需要运动的时间间隔
     */
    function move(curEle,target,duration,effect,callback) {//用来驱动的
        //time change interval
        var time=null;
        var interval=10;
        var begin={};//通过你传入来target的维度来确定begin有多少个维度
        // begin = {width:default,height:default}
        var change={};
        var tempEffect=mEffect.Linear;
        if(typeof effect =="number"){
            switch (effect){
                case 1:
                    tempEffect=mEffect.Bounce.easeIn;
                    break;
                case 2:
                    tempEffect=mEffect.Elastic.easeInOut;
                    break;
            }
        }else if(effect instanceof Array){
            if(effect.length==2){
                effect=mEffect[effect[0]][effect[1]];
            }
        }else {//既不是数字也不是数组
            callback=effect;
        }
        for(var key in target){//我们需要通过target的维度（属性多少），来查找我们begin的属性，如果不是target的属性，我们这个维度就没有必要获取了。
            if(target.hasOwnProperty(key)){
                //通过target的维度给begin添加维度
                begin[key]=utils.css(curEle,key);//
                change[key]=target[key]-begin[key];
            }
        }
        //以上我们只是获取了动画需要的一些条件，t,b,c,d
        window.clearInterval(curEle.timer);
        //接下来我们需要去开启定时器并且完成动画
        curEle.timer=window.setInterval(function () {
            //1 越界判断 2 设置每个维度的值
            time+=interval;//通过花费时间的增长来驱动对应时间的走过的距离
            //需要分别处理每个维度,target里面的维度都需要处理
            if(time>=duration){
                window.clearInterval(curEle.timer);
                //我们还要赋值到target终点
                utils.css(curEle,target);
                if(typeof callback=="function"){
                    callback.call(curEle);
                }
                return;
            }
            for(var k in target){
                if(target.hasOwnProperty(k)){
                    //这里所有能遍历出来的维度需要处理
                    var curPosi=tempEffect(time,begin[k],change[k],duration);//获取单个维度的值
                    utils.css(curEle,k/*维度*/,curPosi/*维度的值*/)
                }
            }
        },interval);
    }
    window.mAnimate=move;
}();
