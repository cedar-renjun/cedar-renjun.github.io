var NAVTREE =
[
  [ "My Project", "index.html", [
    [ "Files", null, [
      [ "File List", "files.html", "files" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"dev_8h_source.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
var navTreeSubIndices = new Array();

function getData(varName)
{
  var i = varName.lastIndexOf('/');
  var n = i>=0 ? varName.substring(i+1) : varName;
  return eval(n.replace(/\-/g,'_'));
}

function stripPath(uri)
{
  return uri.substring(uri.lastIndexOf('/')+1);
}

function stripPath2(uri)
{
  var i = uri.lastIndexOf('/');
  var s = uri.substring(i+1);
  var m = uri.substring(0,i+1).match(/\/d\w\/d\w\w\/$/);
  return m ? uri.substring(i-6) : s;
}

function localStorageSupported()
{
  try {
    return 'localStorage' in window && window['localStorage'] !== null && window.localStorage.getItem;
  }
  catch(e) {
    return false;
  }
}


function storeLink(link)
{
  if (!$("#nav-sync").hasClass('sync') && localStorageSupported()) {
      window.localStorage.setItem('navpath',link);
  }
}

function deleteLink()
{
  if (localStorageSupported()) {
    window.localStorage.setItem('navpath','');
  } 
}

function cachedLink()
{
  if (localStorageSupported()) {
    return window.localStorage.getItem('navpath');
  } else {
    return '';
  }
}

function getScript(scriptName,func,show)
{
  var head = document.getElementsByTagName("head")[0]; 
  var script = document.createElement('script');
  script.id = scriptName;
  script.type = 'text/javascript';
  script.onload = func; 
  script.src = scriptName+'.js'; 
  if ($.browser.msie && $.browser.version<=8) {="" script.onload="" does="" not="" work="" with="" older="" versions="" of="" ie="" script.onreadystatechange="function()" if="" (script.readystate="='complete'" ||="" script.readystate="='loaded')" func();="" (show)="" showroot();="" }="" head.appendchild(script);="" function="" createindent(o,domnode,node,level)="" var="" level="-1;" n="node;" while="" (n.parentnode)="" level++;="" (node.childrendata)="" imgnode="document.createElement("img");" imgnode.style.paddingleft="(16*level).toString()+'px';" imgnode.width="16;" imgnode.height="22;" imgnode.border="0;" node.plus_img="imgNode;" node.expandtoggle="document.createElement("a");" node.expandtoggle.href="javascript:void(0)" ;="" node.expandtoggle.onclick="function()" (node.expanded)="" $(node.getchildrenul()).slideup("fast");="" node.plus_img.src="node.relpath+"ftv2pnode.png";" node.expanded="false;" else="" expandnode(o,="" node,="" false,="" false);="" node.expandtoggle.appendchild(imgnode);="" domnode.appendchild(node.expandtoggle);="" imgnode.src="node.relpath+"ftv2pnode.png";" span="document.createElement("span");" span.style.display="inline-block" span.style.width="16*(level+1)+'px';" span.style.height="22px" span.innerhtml="&#160;" domnode.appendchild(span);="" animationinprogress="false;" gotoanchor(anchor,aname,updatelocation)="" pos,="" doccontent="$('#doc-content');" (anchor.parent().attr('class')="='memItemLeft'" anchor.parent().attr('class')="='fieldtype'" anchor.parent().is(':header'))="" pos="anchor.parent().position().top;" (anchor.position())="" (pos)="" dist="Math.abs(Math.min(" pos-doccontent.offset().top,="" doccontent[0].scrollheight-="" doccontent.height()-doccontent.scrolltop()));="" doccontent.animate({="" scrolltop:="" +="" doccontent.scrolltop()="" -="" doccontent.offset().top="" },math.max(50,math.min(500,dist)),function(){="" (updatelocation)="" window.location.href="aname;" });="" newnode(o,="" po,="" text,="" link,="" childrendata,="" lastnode)="" node="new" object();="" node.children="Array();" node.childrendata="childrenData;" node.depth="po.depth" 1;="" node.relpath="po.relpath;" node.islast="lastNode;" node.li="document.createElement("li");" po.getchildrenul().appendchild(node.li);="" node.parentnode="po;" node.itemdiv="document.createElement("div");" node.itemdiv.classname="item" node.labelspan="document.createElement("span");" node.labelspan.classname="label" createindent(o,node.itemdiv,node,0);="" node.itemdiv.appendchild(node.labelspan);="" node.li.appendchild(node.itemdiv);="" a="document.createElement("a");" node.labelspan.appendchild(a);="" node.label="document.createTextNode(text);" a.appendchild(node.label);="" (link)="" url;="" (link.substring(0,1)="='^')" url="link.substring(1);" link="url;" a.classname="stripPath(link.replace('#',':'));" (link.indexof('#')!="-1)" aname="#" +link.split('#')[1];="" srcpage="stripPath($(location).attr('pathname'));" targetpage="stripPath(link.split('#')[0]);" a.href="srcPage!=targetPage" ?="" :="" "javascript:void(0)";="" a.onclick="function(){" storelink(link);="" (!$(a).parent().parent().hasclass('selected'))="" $('.item').removeclass('selected');="" $('.item').removeattr('id');="" $(a).parent().parent().addclass('selected');="" $(a).parent().parent().attr('id','selected');="" anchor="$(aname);" gotoanchor(anchor,aname,true);="" };="" (childrendata="" !="null)" node.childrenul="null;" node.getchildrenul="function()" (!node.childrenul)="" node.childrenul.classname="children_ul" node.childrenul.style.display="none" node.li.appendchild(node.childrenul);="" return="" node.childrenul;="" node;="" showroot()="" headerheight="$("#top").height();" footerheight="$("#nav-path").height();" windowheight="$(window).height()" footerheight;="" (function="" (){="" retry="" until="" we="" can="" scroll="" to="" the="" selected item="" try="" navtree="$('#nav-tree');" navtree.scrollto('#selected',0,{offset:-windowheight="" 2});="" catch="" (err)="" settimeout(arguments.callee,="" 0);="" })();="" imm,="" showroot)="" (node.childrendata="" &&="" !node.expanded)="" (typeof(node.childrendata)="=='string')" varname="node.childrenData;" getscript(node.relpath+varname,function(){="" showroot);="" },="" (!node.childrenvisited)="" getnode(o,="" node);="" (imm="" ($.browser.msie="" $.browser.version="">8)) { 
        // somehow slideDown jumps to the start of tree for IE9 :-(
        $(node.getChildrenUL()).show();
      } else {
        $(node.getChildrenUL()).slideDown("fast");
      }
      if (node.isLast) {
        node.plus_img.src = node.relpath+"ftv2mlastnode.png";
      } else {
        node.plus_img.src = node.relpath+"ftv2mnode.png";
      }
      node.expanded = true;
    }
  }
}

function glowEffect(n,duration)
{
  n.addClass('glow').delay(duration).queue(function(next){
    $(this).removeClass('glow');next();
  });
}

function highlightAnchor()
{
  var aname = $(location).attr('hash');
  var anchor = $(aname);
  if (anchor.parent().attr('class')=='memItemLeft'){
    var rows = $('.memberdecls tr[class$="'+
               window.location.hash.substring(1)+'"]');
    glowEffect(rows.children(),300); // member without details
  } else if (anchor.parents().slice(2).prop('tagName')=='TR') {
    glowEffect(anchor.parents('div.memitem'),1000); // enum value
  } else if (anchor.parent().attr('class')=='fieldtype'){
    glowEffect(anchor.parent().parent(),1000); // struct field
  } else if (anchor.parent().is(":header")) {
    glowEffect(anchor.parent(),1000); // section header
  } else {
    glowEffect(anchor.next(),1000); // normal member
  }
  gotoAnchor(anchor,aname,false);
}

function selectAndHighlight(hash,n)
{
  var a;
  if (hash) {
    var link=stripPath($(location).attr('pathname'))+':'+hash.substring(1);
    a=$('.item a[class$="'+link+'"]');
  }
  if (a && a.length) {
    a.parent().parent().addClass('selected');
    a.parent().parent().attr('id','selected');
    highlightAnchor();
  } else if (n) {
    $(n.itemDiv).addClass('selected');
    $(n.itemDiv).attr('id','selected');
  }
  if ($('#nav-tree-contents .item:first').hasClass('selected')) {
    $('#nav-sync').css('top','30px');
  } else {
    $('#nav-sync').css('top','5px');
  }
  showRoot();
}

function showNode(o, node, index, hash)
{
  if (node && node.childrenData) {
    if (typeof(node.childrenData)==='string') {
      var varName    = node.childrenData;
      getScript(node.relpath+varName,function(){
        node.childrenData = getData(varName);
        showNode(o,node,index,hash);
      },true);
    } else {
      if (!node.childrenVisited) {
        getNode(o, node);
      }
      $(node.getChildrenUL()).css({'display':'block'});
      if (node.isLast) {
        node.plus_img.src = node.relpath+"ftv2mlastnode.png";
      } else {
        node.plus_img.src = node.relpath+"ftv2mnode.png";
      }
      node.expanded = true;
      var n = node.children[o.breadcrumbs[index]];
      if (index+1<o.breadcrumbs.length) 0="" {="" shownode(o,n,index+1,hash);="" }="" else="" if="" (typeof(n.childrendata)="=='string')" var="" varname="n.childrenData;" getscript(n.relpath+varname,function(){="" n.childrendata="getData(varName);" node.expanded="false;" shownode(o,node,index,hash);="" retry="" with="" child="" node="" expanded="" },true);="" rootbase="stripPath(o.toroot.replace(/\..+$/," ''));="" (rootbase="="index"" ||="" expandnode(o,="" n,="" true,="" true);="" selectandhighlight(hash,n);="" selectandhighlight(hash);="" function="" removetoinsertlater(element)="" parentnode="element.parentNode;" nextsibling="element.nextSibling;" parentnode.removechild(element);="" return="" function()="" (nextsibling)="" parentnode.insertbefore(element,="" nextsibling);="" parentnode.appendchild(element);="" };="" getnode(o,="" po)="" insertfunction="removeToInsertLater(po.li);" po.childrenvisited="true;" l="po.childrenData.length-1;" for="" (var="" i="" in="" po.childrendata)="" nodedata="po.childrenData[i];" po.children[i]="newNode(o," po,="" nodedata[0],="" nodedata[1],="" nodedata[2],="" insertfunction();="" gotonode(o,subindex,root,hash,relpath)="" nti="navTreeSubIndices[subIndex][root+hash];" o.breadcrumbs="$.extend(true," [],="" ?="" :="" navtreesubindices[subindex][root]);="" (!o.breadcrumbs="" &&="" root!="NAVTREE[0][1])" fallback:="" show="" index="" navto(o,navtree[0][1],"",relpath);="" $('.item').removeclass('selected');="" $('.item').removeattr('id');="" (o.breadcrumbs)="" o.breadcrumbs.unshift(0);="" add="" root="" shownode(o,="" o.node,="" 0,="" hash);="" navto(o,root,hash,relpath)="" link="cachedLink();" (link)="" parts="link.split('#');" (parts.length="">1) hash = '#'+parts[1];
    else hash='';
  }
  if (hash.match(/^#l\d+$/)) {
    var anchor=$('a[name='+hash.substring(1)+']');
    glowEffect(anchor.parent(),1000); // line number
    hash=''; // strip line number anchors
    //root=root.replace(/_source\./,'.'); // source link to doc link
  }
  var url=root+hash;
  var i=-1;
  while (NAVTREEINDEX[i+1]<=url) i++;="" if="" (i="=-1)" {="" i="0;" root="NAVTREE[0][1];" }="" fallback:="" show="" index="" (navtreesubindices[i])="" gotonode(o,i,root,hash,relpath)="" else="" getscript(relpath+'navtreeindex'+i,function(){="" navtreesubindices[i]="eval('NAVTREEINDEX'+i);" gotonode(o,i,root,hash,relpath);="" },true);="" function="" showsyncoff(n,relpath)="" n.html('<img="" src="'+relpath+'sync_off.png" title="'+SYNCOFFMSG+'">');
}

function showSyncOn(n,relpath)
{
    n.html('<img src="'+relpath+'sync_on.png" title="'+SYNCONMSG+'">');
}

function toggleSyncButton(relpath)
{
  var navSync = $('#nav-sync');
  if (navSync.hasClass('sync')) {
    navSync.removeClass('sync');
    showSyncOff(navSync,relpath);
    storeLink(stripPath2($(location).attr('pathname'))+$(location).attr('hash'));
  } else {
    navSync.addClass('sync');
    showSyncOn(navSync,relpath);
    deleteLink();
  }
}

function initNavTree(toroot,relpath)
{
  var o = new Object();
  o.toroot = toroot;
  o.node = new Object();
  o.node.li = document.getElementById("nav-tree-contents");
  o.node.childrenData = NAVTREE;
  o.node.children = new Array();
  o.node.childrenUL = document.createElement("ul");
  o.node.getChildrenUL = function() { return o.node.childrenUL; };
  o.node.li.appendChild(o.node.childrenUL);
  o.node.depth = 0;
  o.node.relpath = relpath;
  o.node.expanded = false;
  o.node.isLast = true;
  o.node.plus_img = document.createElement("img");
  o.node.plus_img.src = relpath+"ftv2pnode.png";
  o.node.plus_img.width = 16;
  o.node.plus_img.height = 22;

  if (localStorageSupported()) {
    var navSync = $('#nav-sync');
    if (cachedLink()) {
      showSyncOff(navSync,relpath);
      navSync.removeClass('sync');
    } else {
      showSyncOn(navSync,relpath);
    }
    navSync.click(function(){ toggleSyncButton(relpath); });
  }

  $(window).load(function(){
    navTo(o,toroot,window.location.hash,relpath);
    showRoot();
  });

  $(window).bind('hashchange', function(){
     if (window.location.hash && window.location.hash.length>1){
       var a;
       if ($(location).attr('hash')){
         var clslink=stripPath($(location).attr('pathname'))+':'+
                               $(location).attr('hash').substring(1);
         a=$('.item a[class$="'+clslink+'"]');
       }
       if (a==null || !$(a).parent().parent().hasClass('selected')){
         $('.item').removeClass('selected');
         $('.item').removeAttr('id');
       }
       var link=stripPath2($(location).attr('pathname'));
       navTo(o,link,$(location).attr('hash'),relpath);
     } else if (!animationInProgress) {
       $('#doc-content').scrollTop(0);
       $('.item').removeClass('selected');
       $('.item').removeAttr('id');
       navTo(o,toroot,window.location.hash,relpath);
     }
  })
}

</=url)></o.breadcrumbs.length)></=8)>