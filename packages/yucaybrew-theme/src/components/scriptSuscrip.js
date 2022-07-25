function validateEmail5406255000000377760(){
  var form = document.forms['WebToLeads5406255000000377760'];
  var emailFld = form.querySelectorAll('[ftype=email]');
  var i;
  for (i = 0; i < emailFld.length; i++)
  {
    var emailVal = emailFld[i].value;
    if((emailVal.replace(/^\s+|\s+$/g, '')).length!=0 )
    {
      var atpos=emailVal.indexOf('@');
      var dotpos=emailVal.lastIndexOf('.');
      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length)
      {
        alert('Introduzca una dirección de correo electrónico válida. ');
        emailFld[i].focus();
        return false;
      }
    }
  }
  return true;
}

function checkMandatory5406255000000377760() {
  var mndFileds = new Array('Last Name');
  var fldLangVal = new Array('Nombre\x20completo');
  for(i=0;i<mndFileds.length;i++) {
    var fieldObj=document.forms['WebToLeads5406255000000377760'][mndFileds[i]];
    if(fieldObj) {
    if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
     if(fieldObj.type =='file')
      { 
       alert('Seleccione un archivo para cargar.'); 
       fieldObj.focus(); 
       return false;
      } 
    alert(fldLangVal[i] +' no puede estar vacío.'); 
              fieldObj.focus();
              return false;
    }  else if(fieldObj.nodeName=='SELECT') {
             if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
      alert(fldLangVal[i] +' no puede ser nulo.'); 
      fieldObj.focus();
      return false;
       }
    } else if(fieldObj.type =='checkbox'){
        if(fieldObj.checked == false){
      alert('Please accept  '+fldLangVal[i]);
      fieldObj.focus();
      return false;
       } 
     } 
     try {
         if(fieldObj.name == 'Last Name') {
      name = fieldObj.value;
           }
    } catch (e) {}
      }
  }
  if(!validateEmail5406255000000377760()){return false;}
  document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
}

function tooltipShow5406255000000377760(el){
  var tooltip = el.nextElementSibling;
  var tooltipDisplay = tooltip.style.display;
  if(tooltipDisplay == 'none'){
    var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
    for(i=0; i<allTooltip.length; i++){
      allTooltip[i].style.display='none';
    }
    tooltip.style.display = 'block';
  }else{
    tooltip.style.display='none';
  }
}

<script id='wf_anal' src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=688bac331827e8787a37f0fcccb2c4438ba9c090d2e0d8beb96f60b7893536dagid025364eab6b1963a89115dc1646d460b51d3a74a075b7cbcaf1a499df8549babgid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a'>
</script>