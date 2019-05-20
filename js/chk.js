function chk() {
	this.id_ary=Array()
	this.str_ary=Array()
	this.err=Array()
	this.err_id=Array()
	this.tar
	this.mce_ary=Array()
	this.mce_str=Array()
	this.cstr="abcdefghijklmnopqrstuvwxyz"
	this.cval="0123456789"
	this.chk_input=function(){
		for(var i=0;i< this.id_ary.length;i++)
		{	
			switch($("#"+this.id_ary[i]).get(0).tagName){
				case "INPUT":{
					if($.trim($("#"+this.id_ary[i]).val())==""){
						this.err_id.push(this.id_ary[i])
						this.err.push(this.str_ary[i])
					}
				}break
				case "TEXTAREA":{
					var cont
					try{
						cont=tinyMCE.get(this.id_ary[i]).getContent();
					}catch(err){
						cont=$("#"+this.id_ary[i]).val();
					}
					while(cont.indexOf("&nbsp;")!=-1){
						cont=cont.replace("&nbsp;","");
					}
					cont=cont.replace("<p>","");
					cont=cont.replace("</p>","");
					if($.trim(cont)==""){
						this.err_id.push(this.id_ary[i])
						this.err.push(this.str_ary[i])
					}
				}break
			}
		}
	}
	this.compare=function(c1,c2,str){
		if($("#"+c1).val()!=$("#"+c2).val()){
			this.err_id.push(c1)
			this.err.push(str)
			return false
		}
		return true
	}
	this.result=function(alt){
		this.chk_input()
		if(this.err.length!=0){
			if(!alt||alt==true){
				alert(this.err.join("\n"))
			}else{

			}
			return false
		}else{
			return true
		}
	}
	this.mail_val=function(domid,str){
		var domstr=$("#"+domid).val()
		if($.trim(domstr)==""){return false}
		var emailPattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if(!emailPattern.test(domstr)){
			this.err_id.push(domid)
			this.err.push(str)
			return false
		}
		return true
	}
	
	
	///////驗證輸入帳密20170206///////
	this.acc_pwd_check = function(acc,pwd){
		var acc_length_min = 6; //帳號最小長度
		var acc_length_max = 12; //帳號最大長度
	    var pwd_length = 6;  //密碼最小長度
		if (acc.length > acc_length_max || acc.length < acc_length_min) {  //驗證帳號長度
			alert('帳號長度須為'+acc_length_min+'~'+acc_length_max+'個字');
            return false;
        }
		if (pwd.length < pwd_length) {  //驗證密碼長度
			alert('密碼長度至少須'+pwd_length+'個字');
            return false;
        }else{
			var regExp = /[^a-z]/;
			if(isNaN(pwd) == false || regExp.test(pwd) == false){   //驗證是否英數組合
				alert('密碼須為英數組合');
				return false;
			}
        }
        return true;
	}
	///////驗證輸入帳密20170206///////
	
	
	this.url_val=function(domid,str) {
		var domstr=$("#"+domid).val()
		if($.trim(domstr)==""){return false}
    var re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/);
    if(!domstr.match(re)){
    	this.err_id.push(domid)
			this.err.push(str)
			return false
    }
    return true
	}
	this.optchk=function(sid,ecode,str){
		if($('#'+sid).val()==ecode){
			this.err_id.push(sid)
			this.err.push(str)
		}
	}
	this.taera_chk=function(tname,limitl,empstr,overstr){
		var cstr=$('textarea[name="'+tname+'"]').val()
		if(cstr.length >limitl){
			this.err_id.push(tname)
			this.err.push(overstr)
		}
		if(cstr==""){
			this.err_id.push(tname)
			this.err.push(empstr)
		}
	}
	this.chk_long=function(sid,l_ary,str){
		if($.trim($('#'+sid).val())==""){return}
		if($('#'+sid).val().length< l_ary[0]||$('#'+sid).val().length > l_ary[1]){
			this.err_id.push(sid)
			this.err.push(str)
			return false
		}
		return true
	}
	this.chk_acc=function(sid,str){
		var strx=this.cstr+this.cval
		var tar=$("#"+sid).val().toLowerCase()
		for(var i=0;i< tar.length;i++){
			if(tar.charAt(i).indexOf(strx)==-1){
				this.err_id.push(sid)
				this.err.push(str)
				return false
			}
		}
		return true
	}
	return this
}


