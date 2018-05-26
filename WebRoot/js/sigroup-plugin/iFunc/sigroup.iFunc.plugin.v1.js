var iFunc = {
	reg : /^\s*$/,		//用于判断是否是一个或者多个空格
	split_1 : "#@#",
	split_2 : "~@~",
	//字符串为空判断
	isEmpty : function(str){
		if(str != null && str != undefined && this.reg.test(str) == false){
			return false;
		}
		return true;
	},
	//邮箱监测
	CheckEmail : function (email){
		var reyx= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		return(reyx.test(email));
	},
	
	//数字缩写
	sum : function(t){
		if(t!=null && t!=undefined && t!=""){
			var t = parseInt(t);
			if(t > 1000000){
				t = (t/1000000).toFixed(1)+"M";
			} else if(t > 1000){
				t = (t/1000).toFixed(1)+"K";
			}
		}
		return t;
	},
	//URL解析
	UrlParse : function(){
		var search = window.location.search;
		var paramObj = {};
		if (search != null && !this.isEmpty(search) && search.indexOf("?") == 0){
	  		search = search.substring(1);
	  		var params = search.split("&");
	  		//console.log("size:"+params.length + "; params:" + params);
	  		for(var i=0; i<params.length; i++){
	  			var n = params[i];
	  			if(n != null && !this.isEmpty(n)){
		  			var param = n.split("=");
		  			if(param != null && param.length > 1){
			  			var key = param[0];
			  			var val = param[1];
			  			//console.log(key+":"+val);
			  			if(key != null && !this.isEmpty(key)){
			  				paramObj[key] = val;
				  			//console.log(paramObj);
			  			}
		  			}
	  			}
	  		}
	  	}
	  	return paramObj;
	  },
	  
	//cookie操作
	  getValue:function(k){var v=window.sessionStorage.getItem(k);return v;},
	  saveValue:function(k,v){if(k==null){return null;}var o=window.sessionStorage.setItem(k,v);return o;},
	  removeHashKey:function(k){window.sessionStorage.removeItem(k);},
	  saveValueWithinROOT:function(k,v){if(k==null){return null;}var o=$.cookie(k,v,{expires:30,path:"/"});return o;},
	  removeHashKeyWithinROOT:function(key){$.cookie(key, null,{path:"/"});},
	  //系统跳转标记前缀
	  sysJumpPreFix:"url_param_",
	  
	  //获取用户权限
	  getUserFrame:function(username,func){
		  if(this.isEmpty(username)){
			  return null;
		  }
		  var frame;
		  var un = this.getValue("username");
		  if(!this.isEmpty(un) && un==username){
			  frame = this.getValue("sysFrame");
		  }
		  if(this.isEmpty(frame)){
			  $.post("sys_find_user_frame.action", function(vframe){
				  console.log("Frame From Post.");
				  iFunc.saveValue("sysFrame",vframe);
				  iFunc.saveValue("username",username);
				  if(func){
					  func(vframe);
				  }
			  });
		  } else {
			  console.log("Frame From Storage.");
			  if(func){
				  func(frame);
			  }
		  }
	  },
	  
	  //用户行为跟踪
	  preFix : "进入 ",
	  recordOper : function (operation){
			//$.post("json_manageConfig_logoperate.action",{data:operation},function(){});
			$.get("sys_save_user_oper.action?data="+encodeURIComponent(encodeURIComponent(iFunc.preFix+operation)));
	  },
	  
	  //境外代理
	  abroadAgentPrefix : "https://isionlineproxy.com/cgi-bin/nph-proxy.cgi/en/E0/",
	  abroadAgent : function(){
		  $(document).off("hover", "[title=查看源网页]").on("hover", "[title=查看源网页]", function(){
			  	var scate = $(this).data("scate");
			  	if(scate && (scate == 0 || scate == 2)){	//0-未知，1-境内，2-境外
			  		var url = $(this).attr("href");
			  		if(url){
			  			if(url.indexOf(iFunc.abroadAgentPrefix) == -1){
			  				url = url.replace("://", "/");
			  				url = iFunc.abroadAgentPrefix+url;
			  				$(this).attr("href",url);
			  			}
			  		}
			  	}
		  });
	  },
	  
	  
	  //HighCharts option
	  typeList : ['新闻','论坛','博客','微博','视频','QQ','YY'],
	  stagelList : ['一','二','三','四','五','六','七','八','九','十', "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十"],
	  labelList : ['发生','发展','高峰','回落','消亡'],
	  colorList : ['#e4d354','#f7a35c','#f15c80','#90ed7d','#8085e9'],
	  opacityValue : 0.4,
	  dateTimeLabelFormats:{
			millisecond: '%H:%M:%S.%L',
			second: '%H:%M:%S',
			minute: '%H:%M',
			hour: '%H:%M',
			day: '%b%e日',
			week: '%b%e日',
			month: '%y年%b',
			year: '%Y'
	  },
	  timezoneOffset: 28800000,		//-8*60*60*1000
	  cutLen : 10,						//截取字符长度
	  legendCutLen : 40,
	  
	  //iPage按钮
	  exportBtn : '<button class="ipage-fenye-on exoprt_btn">导出所选</button>',
	  exportAllBtn : '<button class="ipage-fenye-on exoprt_all_btn">导出全部</button>',
	  infoCompareBtn : '<button class="ipage-fenye-on info_compare_btn">信息对比</button>',
	  infoAnalysisBtn : '<button class="ipage-fenye-on info_analysis_btn">信息分析</button>',
	  
	  //信息列表页已阅功能
	  changeReadFlag	:	function(container, parentClass, tflag){	//tflag=0则时间格式为yyyy-MM-dd 否则就是yyyy-MM-dd HH:mm:ss
		  parentClass = parentClass === undefined ? ".informationlist" : parentClass 
		  //$("[data-status=1]",$(container)).css("color","#88888");
			//$("font[data-status=1].readFlag",$(container)).css("color","rgb(247, 156, 156)").show();
			$(".changecolor",$(container)).click(function(){
				var $tr = $(this).closest(parentClass);
				$tr.find("a.not('.yiyueClass'),b,span,p").css("color","#888888");
				$tr.find("p.info_btn").find("b").find("a").css("color","#fff");
				var $readFlog = $tr.find(".readFlag");
				$readFlog.show();
				var status = $readFlog.data("status");
				var mydate = new Date();
				var h = mydate.getHours();
				var m = mydate.getMinutes();
				var s = mydate.getSeconds();
				h = h < 10 ? ("0" + h) : h; 
				m = m < 10 ? ("0" + m) : m; 
				s = s < 10 ? ("0" + s) : s; 
				var readtime;
				if (tflag == 0) {
					readtime = mydate.getFullYear()+"-"+(mydate.getMonth()+1)+"-"+mydate.getDate(); 
				} else {
					readtime = mydate.getFullYear()+"-"+(mydate.getMonth()+1)+"-"+mydate.getDate()+" "+h+":"+m+":"+s;
				}
				
				console.info("readtime=="+readtime);
				if(status != "1"){
					$readFlog.data("status", 1).find("a").attr("title", "阅读者:"+username);
					$readFlog.data("status", 1).find("a").html("已阅 "+username+" "+readtime);
				}
				//处置按钮
				$(".dispose_info div .info_btn a").css({"color":"#fff"});
			});
	  }, 
	  
	  saveEchartOption : function (container, option) {
		  $("#" + container).find("[name=" + container + "_code]").remove();
		  $("#" + container).append("<textarea name='"+ container +"_code' style='display:none;'></textarea>");
		  $("#" + container).find("[name=" + container + "_code]").val(JSON.stringify(option));
	  },
	  /**
	   * 话题名称验证：不能包含特殊字符，中文、字母、数字、下划线
	   * @param name
	   * @returns {Boolean}
	   */
	  checkTopicName : function(name) {
		  var re1 = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-])*$"); 
		  if (!re1.test(name)){ 
			  return false; 
		  } else {
			  return true;
		  } 
		  
	  },
	  
	  checkKeywords : function(keyword) {
		  var kws = $.trim(keyword);
		  if (kws != '') {
			  kws = kws.replace("；",";");
			  if (kws == ';') {
				  return false;
			  }
			  var re1 = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_\\s])*$"); 
			  var kwsArray = kws.split(";");
			  for (var i = 0; i < kwsArray.length; i ++) {
				  if (kwsArray[i] == '' || !re1.test(kwsArray[i])) {
					  return false;
				  }
			  }
			  return true;
		  } else {
			  return false;
		  }
	  }
};

