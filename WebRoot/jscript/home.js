/**
 * Created by Administrator on 2018/4/19.
 */
//点击退出
$('#opt').on('click',function(e){
    if($(this).attr('onOff') == 'false'){
        $(this).attr('onOff','true');
        $('#mmpop_system_menu').show();
        if($('#internetHead').attr('onOff') == 'true'){
            $('#internetHead').attr('onOff','false');
            $('#mmpop_profile').hide();
        }
    }else{
        $(this).attr('onOff','false');
        $('#mmpop_system_menu').hide();
    }
    stopPropagation(e);
});

//点击群组个人详情 下拉人员详情信息
$('#sayCon').on('click','.headNameTitle',function(e){
    if($(this).attr('onOff') == 'false'){
        $(this).attr('onOff','true');
        $(this).find('i').attr('class','fa fa-angle-up');
        $('.groupConects').slideDown();
    }else{
        $(this).attr('onOff','false');
        $(this).find('i').attr('class','fa fa-angle-down');
        $('.groupConects').slideUp();
    }
    stopPropagation(e);
});

//点击人员详情信息 出现弹框
$('#groupConects').on('click','.groupItem',function(e){
    stopPropagation(e);
});


$(document).bind("click",function(){
    //点击头像以外的地方
    if($('#internetHead').attr('onOff') == 'true'){
        $('#internetHead').attr('onOff','false');
        $('#mmpop_profile').hide();
        // $("#mmpop_profile").fadeOut();
    }
    //退出按钮
    if($('#opt').attr('onOff') == 'true'){
        $('#opt').attr('onOff','false');
        $('#mmpop_system_menu').hide();
    }
    //聊天对话框眉头信息 下拉人员详情信息
    if($('#headNameTitle').attr('onOff') == 'true'){
        $('.headNameTitle').attr('onOff','false');
        $('.headNameTitle').find('i').attr('class','fa fa-angle-down');
        $('.groupConects').slideUp();
    }

});

//点击头像
$('#internetHead').on('click',function(e){
    if($(this).attr('onOff') == 'false'){
        $(this).attr('onOff','true');
        $('#mmpop_profile').show();
        if($('#opt').attr('onOff') == 'true'){
            $('#opt').attr('onOff','false');
            $('#mmpop_system_menu').hide();
        }
    }else{
        $(this).attr('onOff','false');
        $('#mmpop_profile').hide();
    }
    stopPropagation(e);
});

function stopPropagation(e) {
    if (e.stopPropagation)
        e.stopPropagation();//停止冒泡  非ie
    else
        e.cancelBubble = true;//停止冒泡 ie
}

//点击图片 预览 下载
$('#sayCon').on('click','.fileImg',function(){
    var imgSrc = $(this).find('img').attr('src');
    var uploadImgsrc = $(this).attr('uploadsrc');
    $('#imgModal').show();
    $('#imgModal').find('img').attr('src',imgSrc);
    $('#imgModal').find('.imgUpload').attr('download',imgSrc);
    $('#imgModal').find('.imgUpload').attr('href',"javascript:;");
    //$('#imgModal').find('.imgUpload').attr('href',imgSrc);
    // window.location.href = imgSrc;
});

$('.imgUpload').on('click',function() {
    var imgSrc = $(this).attr('download');
    window.location.href = "message/downloadFile?downFileName=" + imgSrc;
});


//图片预览下载 弹框 关闭
$('#closeImg').on('click',function () {
    $('#imgModal').hide();
});

//文件的下载
$('#sayCon').on('click','.fileUpload',function(){
    var uploadSrc = $(this).attr('fileUpload');
//    window.location.href = uploadSrc;
//    var url = $(this).attr("upload");
 	window.location.href = "message/downloadFile?downFileName=" + uploadSrc;
});


//文件列表详情里的文件下载
$('#fileCon').on('click','.uploads',function(){
	debugger
     var uploadSrc = $(this).attr('uploadsrc');
//    window.location.href = uploadSrc;
    window.location.href = "message/downloadFile?downFileName=" +uploadSrc;
});
