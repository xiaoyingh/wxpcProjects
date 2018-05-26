//QQ表情数据
var emojiconfig = {
    qq: {
        name: "QQ表情",
        path: "images/expression/wgqq/",
        maxNum: 107,
        file: ".png",
        placeholder: ":{alias}:",
        alias: {
            0:"[呲牙]",
            1:"[调皮]",
            2:"[流汗]",
            3:"[偷笑]",
            4:"[再见]",
            5:"[敲打]",
            6:"[擦汗]",
            7:"[猪头]",
            8:"[玫瑰]",
            9:"[流泪]",
            10:"[大哭]",
            11:"[嘘]",
            12:"[酷]",
            13:"[抓狂]",
            14:"[委屈]",
            15:"[便便]",
            16:"[炸弹]",
            17:"[菜刀]",
            18:"[可爱]",
            19:"[色]",
            20:"[害羞]",
            21:"[得意]",
            22:"[吐]",
            23:"[微笑]",
            24:"[发怒]",
            25:"[尴尬]",
            26:"[惊恐]",
            27:"[冷汗]",
            28:"[爱心]",
            29:"[示爱]",
            30:"[白眼]",
            31:"[傲慢]",
            32:"[难过]",
            33:"[惊讶]",
            34:"[疑问]",
            35:"[睡]",
            36:"[亲亲]",
            37:"[憨笑]",
            38:"[爱情]",
            39:"[衰]",
            40:"[撇嘴]",
            41:"[阴险]",
            42:"[奋斗]",
            43:"[发呆]",
            44:"[右哼哼]",
            45:"[拥抱]",
            46:"[坏笑]",
            47:"[飞吻]",
            48:"[鄙视]",
            49:"[晕]",
            50:"[大兵]",
            51:"[可怜]",
            52:"[强]",
            53:"[弱]",
            54:"[握手]",
            55:"[胜利]",
            56:"[抱拳]",
            57:"[凋谢]",
            58:"[饭]",
            59:"[蛋糕]",
            60:"[西瓜]",
            61:"[啤酒]",
            62:"[飘虫]",
            63:"[勾引]",
            64:"[OK]",
            65:"[爱你]",
            66:"[咖啡]",
            67:"[钱]",
            68:"[月亮]",
            69:"[美女]",
            70:"[刀]",
            71:"[发抖]",
            72:"[差劲]",
            73:"[拳头]",
            74:"[心碎]",
            75:"[太阳]",
            76:"[礼物]",
            77:"[足球]",
            78:"[骷髅]",
            79:"[挥手]",
            80:"[闪电]",
            81:"[饥饿]",
            82:"[困]",
            83:"[咒骂]",
            84:"[折磨]",
            85:"[抠鼻]",
            86:"[鼓掌]",
            87:"[糗大了]",
            88:"[左哼哼]",
            89:"[哈欠]",
            90:"[快哭了]",
            91:"[吓]",
            92:"[篮球]",
            93:"[乒乓球]",
            94:"[NO]",
            95:"[跳跳]",
            96:"[怄火]",
            97:"[转圈]",
            98:"[磕头]",
            99:"[回头]",
            100:"[跳绳]",
            101:"[激动]",
            102:"[街舞]",
            103:"[献吻]",
            104:"[左太极]",
            105:"[右太极]",
            106:"[闭嘴]"
        },
        title: {
            "[呲牙]":"0",
            "[调皮]":"1",
            "[流汗]":"2",
            "[偷笑]":"3",
            "[再见]":"4",
            "[敲打]":"5",
            "[擦汗]":"6",
            "[猪头]":"7",
            "[玫瑰]":"8",
            "[流泪]":"9",
            "[大哭]":"10",
            "[嘘]":"11",
            "[酷]":"12",
            "[抓狂]":"13",
            "[委屈]":"14",
            "[便便]":"15",
            "[炸弹]":"16",
            "[菜刀]":"17",
            "[可爱]":"18",
            "[色]":"19",
            "[害羞]":"20",
            "[得意]":"21",
            "[吐]":"22",
            "[微笑]":"23",
            "[发怒]":"24",
            "[尴尬]":"25",
            "[惊恐]":"26",
            "[冷汗]":"27",
            "[爱心]":"28",
            "[示爱]":"29",
            "[白眼]":"30",
            "[傲慢]":"31",
            "[难过]":"32",
            "[惊讶]":"33",
            "[疑问]":"34",
            "[睡]":"35",
            "[亲亲]":"36",
            "[憨笑]":"37",
            "[爱情]":"38",
            "[衰]":"39",
            "[撇嘴]":"40",
            "[阴险]":"41",
            "[奋斗]":"42",
            "[发呆]":"43",
            "[右哼哼]":"44",
            "[拥抱]":"45",
            "[坏笑]":"46",
            "[飞吻]":"47",
            "[鄙视]":"48",
            "[晕]":"49",
            "[大兵]":"50",
            "[可怜]":"51",
            "[强]":"52",
            "[弱]":"53",
            "[握手]":"54",
            "[胜利]":"55",
            "[抱拳]":"56",
            "[凋谢]":"57",
            "[饭]":"58",
            "[蛋糕]":"59",
            "[西瓜]":"60",
            "[啤酒]":"61",
            "[飘虫]":"62",
            "[勾引]":"63",
            "[OK]":"64",
            "[爱你]":"65",
            "[咖啡]":"66",
            "[钱]":"67",
            "[月亮]":"68",
            "[美女]":"69",
            "[刀]":"70",
            "[发抖]":"71",
            "[差劲]":"72",
            "[拳头]":"73",
            "[心碎]":"74",
            "[太阳]":"75",
            "[礼物]":"76",
            "[足球]":"77",
            "[骷髅]":"78",
            "[挥手]":"79",
            "[闪电]":"80",
            "[饥饿]":"81",
            "[困]":"82",
            "[咒骂]":"83",
            "[折磨]":"84",
            "[抠鼻]":"85",
            "[鼓掌]":"86",
            "[糗大了]":"87",
            "[左哼哼]":"88",
            "[哈欠]":"89",
            "[快哭了]":"90",
            "[吓]":"91",
            "[篮球]":"92",
            "[乒乓球]":"93",
            "[NO]":"94",
            "[跳跳]":"95",
            "[怄火]":"96",
            "[转圈]":"97",
            "[磕头]":"98",
            "[回头]":"99",
            "[跳绳]":"100",
            "[激动]":"101",
            "[街舞]":"102",
            "[献吻]":"103",
            "[左太极]":"104",
            "[右太极]":"105",
            "[闭嘴]":"106"
        }
    }
};
var _hash = emojiconfig.qq.title;
var prom_num; //记录接收的消息如果不是当前对话时 显示的未读消息数目

    //消息封装
	function messageDeal(message,toUserId,fromUserId){
		var json={"message":messsage,"toUserId":toUserId,"fromUserId":fromUserId};
		return json;
	}
    //调用QQ表情
    $('.Main').myEmoji({emojiconfig : emojiconfig});

	//点击发送按钮
	$('.sendBtn').on('click',function(){
		sendMessage();
	});
    //查看qq表情结果
	/*
    function replace_em(str){
        str = str.replace(/\</g,'&lt;');
        str = str.replace(/\>/g,'&gt;');
        str = str.replace(/\n/g,'<br/>');
        str = str.replace(/\[em_([0-9]*)\]/g,'<img src="arclist/$1.gif" border="0" />');
        return str;
    }*/
	//输入[微笑]文本 转成图片
    function format(str){
        var list = str.match(/\[[\u4e00-\u9fa5]*\w*\]/g);
        var filter = /[\[\]]/g;
        var title;
        if(list){
            for(var i=0;i<list.length;i++){
                title = list[i].replace(filter,'');
                if(_hash[list[i]]){
                    str = str.replace(list[i],' <img src="images/expression/wgqq/'+_hash[list[i]]+'.png" style="width: 24px;height: 24px;"/> ');
                }
            }
        }
        return str;
    }

	function sendMessage(){
		//根据群或者个人
		 var ctype = activeType;
		var formUserId = $("#userId").val();
		var toUserId = "";
		var groupId = "";
		var typeu = "";
		var date = new Date();
    	var time = date.getTime();
        if(time -timeStr > 30*60*1000){
     		  $('#sayCon').find('.RightCont').find('.newsList').append("<div class='sayclass'>"+formatDate(new Date())+"</div>");  
        }
        timeStr = time;
		if(ctype ==1){
			 typeu = 11;
			 toUserId = $('.conLeft').find('li.bg').find('.userInfo').data("id");//如果是群，获取全部成员用户的id,除了自己  1,12,2
		}else{
			 typeu = 21;
			 groupId = $('.conLeft').find('li.bg').find('.userInfo').data("id");
			 toUserId = userIdFromGroup;
			
		}
		// var newtext = $.trim($('#dope').html());
        var newtext = $.trim($('#dope').val());
        // var news = replace_em(newtext);
		var news = format(newtext);
        console.log(news);
        debugger;
		if(news==''){
			alert('不能为空');
		}else{
			// $('#dope').html('');
            $('#dope').val('');
		var str='';
		str+='<li class="clearfix">'+
				'<div class="answerHead"><img src="'+userIcon+'"></div>'+
				'<div class="answers" style="padding: 4px 12px;"><img class="jiao" src="images/icon/masker01.png">'+news+'</div>'+
			'</li>';
		$('#sayCon').find('.RightCont').find('.newsList').append(str);
		$('#userList').find('li.bg').find('.infor').html(news);
		//$('#userList').find('li.bg').find('.sendtime').html(sendTime);
		$('.RightCont').scrollTop($('.RightCont')[0].scrollHeight );
		var json={"ctype":ctype,"typeu":typeu,"content":news,"toUserId":toUserId,"fromUserId":formUserId,"groupId":groupId};
		var jsons=JSON.stringify(json); //将JSON对象转化为JSON字符

		 websocket.send(jsons);//先后台发送数据
		}
	}
	//发送通知和预案
	function sendMessage_action(data,typeu){
        // var data = {
        //     "uid": userId,
        //     "title": title,
        //     "content": content,  //发送文本内容
        //     "type": 1,   //发送的是文本
        //     "toUid": personsId,  //发给选中人员的id
        //     "url": ''
        // };
		//发送通知消息
		 var ctype = "3";
		 var title = data.title;
		var formUserId = data.uid;
		var toUserId = data.toUid;
		var groupId = "";
		var typeu = typeu;
		
		var json={"ctype":ctype,"typeu":typeu,"content":title,"toUserId":toUserId,"fromUserId":formUserId,"groupId":groupId};
		var jsons=JSON.stringify(json); //将JSON对象转化为JSON字符
		 websocket.send(jsons);//先后台发送数据
	
	}
	//上传文件
	function sendMessage_file(filetype,path,filename,size){
        //定义发送的是文本还是文件 filetype'
		var ctype=activeType;
		var formUserId = "";
		var groupId = "";
		var toUserId = "";
		var news;
        var newsPadding = '';
		 formUserId=$("#userId").val();
		 if(ctype == 1){
			  toUserId=$('.conLeft').find('li.bg').find('.userInfo').data("id");
		 }else if(ctype == 2){
			 groupId = $('.conLeft').find('li.bg').find('.userInfo').data("id");
			 toUserId = userIdFromGroup;
		}
		if(filetype == 15 ||filetype == 25 ){
            newsPadding = "padding: 2px;";
            news = fileHtml(filename,size,path);
		}else if(filetype == 12||filetype == 22){
            newsPadding = "padding: 0px;";
            news = "<div class='fileImg cursor'><img src='"+(fileUrl+"/"+path)+"' /></div>";
		}
		if(news==''){
			alert('不能为空');
		}else{
			// $('#dope').html('');
            $('#dope').val('');
		var str='';
		str+='<li class="clearfix">'+
				'<div class="answerHead"><img src="'+userIcon+'"></div>'+
				'<div class="answers" style="'+newsPadding+'"><img class="jiao" src="images/icon/masker01.png">'+news+'</div>'+
			'</li>';

        $('#sayCon').find('.RightCont').find('.newsList').find('.fileImgLoading').remove();
        $('#sayCon').find('.RightCont').find('.newsList').append(str);
		$('#userList').find('li.bg').find('.infor').html('[文件]');
		$('.RightCont').scrollTop($('.RightCont')[0].scrollHeight );
		var jsoncontent={"fileName":filename,"size":size,"idtf":"","url":path};
		var json={"ctype":ctype,"typeu":filetype,"content":JSON.stringify(jsoncontent),"toUserId":toUserId,"fromUserId":formUserId,"groupId":groupId};
		var jsons=JSON.stringify(json); //将JSON对象转化为JSON字符
		 websocket.send(jsons);//先后台发送数据
		}
	}

    //接收信息函数
	function receiveMessage(data){
		var json=eval('(' + data + ')');
        var ctype=json.ctype;      //判断是单聊（1）还是群组（2） 还是通知行动预案（3）的消息
        var typeu=json.typeu;     //判断接收消息的类型 11单聊文本 12单聊图片 15单聊文件  21，22,25群聊 31通知 41行动
		var usercheck = "";
		var filename = ""; //文件或图片的 名字
		var size = "";      //文件或图片的 大小
		var path = "";      //文件或图片的 路径
		var newsPadding = '';   //文件或图片的 容器的内边距
		var answer="";      //展示消息包括发消息人的头像等的容器
		var message="";     //展示信息（文本或文件或图片）容器
		var fromUserId=json.fromUserId;   //发起消息的人的id
		var toUserId=json.toUserId;       //接收消息的人的id
        var content=json.content;         //接收的消息内容
        var groupId=json.groupId;         //如果是群组 接收消息的群组id
		var sendTime=json.createTime.split(" ")[1];  //发送消息时间
		var icon=$("#icon_"+fromUserId).find("img").attr("src");
		var receText = null; //接收消息时展示在列表的内容

		if($('#closeAdio').attr('onOff')=='true'){

            audioPlay();
		}
        //判断接收的消息是否是当前对话（当前聊天列表的焦点）true是接收的消息是来自 现在正在对话的发送者 false是其他发送者
		if(ctype ==1){

			 usercheck = $('#icon_'+json.fromUserId).parent().hasClass('bg')?'true':'false';
		}else if(ctype ==2){
			usercheck = $('#icon_'+json.groupId).parent().hasClass('bg')?'true':'false';
		}else if(ctype ==3){
            receText = content;
            if(typeu == 31){
                prom_num = $(".notice").siblings('.prompt').html();
                prom_num++;
                $(".notice").siblings('.prompt').show().html(prom_num);
                $(".notice").find('.infor').html(receText);
			}else if(typeu == 41){
                prom_num = $(".actions").siblings('.prompt').html();
                prom_num++;
                $(".actions").siblings('.prompt').show().html(prom_num);
                $(".actions").find('.infor').html(receText);
			}
			return;
		}
		if(typeu==15 ||typeu==12 || typeu==25 ||typeu==22){
			 contentT=eval('(' + content + ')');
			 filename = contentT.fileName;
			 size = contentT.size;
			 path = contentT.url;
		}
		
        if(typeu==15 ||typeu==25){
            message = fileHtml(filename,size,path);
            receText = "[文件]";
            newsPadding = 'padding: 2px;'
        }else if(typeu==11 ||typeu==21){
            receText = content;
            message = format(content);
		}else if(typeu==12 || typeu==22){
            receText = "[图片]";
            message = "<div class='fileImg cursor'><img src='"+path+"' /></div>";
            newsPadding = 'padding: 0px;';
		}
		answer+='<li class="clearfix">'+
		'<div class="nesHead"><img src="'+icon+'"/></div>'+
		'<div class="news" style="'+newsPadding+'"><img class="jiao" src="images/icon/masker02.png">'+message+'</div>'+
		'</li>';
		 if(ctype ==1){
			 if($('#icon_'+fromUserId).parent().hasClass('bg')){
				 $('#sayCon').find('.RightCont').find('.newsList').append(answer);
			 }else{
                 prom_num = $('#icon_'+fromUserId).siblings('.prompt').html();
                 prom_num++;
                 $('#icon_'+fromUserId).siblings('.prompt').show().html(prom_num);
                 $('#icon_'+fromUserId).next().find('.sendtime').html(sendTime);
                 $('#icon_'+fromUserId).next().find('.infor').html(receText);
                 $('.RightCont').scrollTop($('.RightCont')[0].scrollHeight );
			 }
		 }else{
			 if($('#icon_'+groupId).parent().hasClass('bg')){
				 $('#sayCon').find('.RightCont').find('.newsList').append(answer);
			 }else{
                 prom_num = $('#icon_'+groupId).siblings('.prompt').html();
				 prom_num++;
                 $('#icon_'+groupId).siblings('.prompt').show().html(prom_num);
                 $('#icon_'+groupId).next().find('.sendtime').html(sendTime);
                 $('#icon_'+groupId).next().find('.infor').html(receText);
			 }
		 }
		
	}

	
	$('.ExP').on('mouseenter',function(){
		$('.emjon').show();
	});
	$('.emjon').on('mouseleave',function(){
		$('.emjon').hide();
	});
	$('.emjon li').on('click',function(){
		var imgSrc=$(this).children('img').attr('src');
		var str="";
		str+='<li class="clearfix">'+
				'<div class="answerHead"><img src="img/6.jpg"/></div>'+
				'<div class="answers"><img class="jiao" src="img/jiao2.jpg"><img class="Expr" src="'+imgSrc+'"></div>'+
			'</li>';
		$('.newsList').append(str);
		$('.emjon').hide();
		$('.RightCont').scrollTop($('.RightCont')[0].scrollHeight );
	});
	
	function uuid() {
		    var s = [];
		    var hexDigits = "0123456789abcdef";
		    for (var i = 0; i < 36; i++) {
		        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		    }
		    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
		    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
		    s[8] = s[13] = s[18] = s[23] = "-";
		 
		    var uuid = s.join("");
		    return uuid;
	}


	