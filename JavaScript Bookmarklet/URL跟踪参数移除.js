javascript:(function()%7Bconsole.info(%27Version: 0.1.12%27)%3Bconst rules%3D%7B%27www.bilibili.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/www%5C.bilibili%5C.com%5C/video%5C/(av%5Cd%2B).*%24/i,replace:%27https://www.bilibili.com/%241%27,query:%5B%27p%27%5D,hash:!0%7D,%27itunes.apple.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/itunes%5C.apple%5C.com%5C/(%3F:%5Cw%7B2%7D%5C/)%3F(%5B%5E%5C/%5D%2B)%5C/(%3F:%5B%5E%5C/%5D%2B%5C/)%3F((%3F:id)%5Cd%2B).*%24/i,replace:%27https://itunes.apple.com/cn/%241/%242%27%7D,%27apps.apple.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/apps%5C.apple%5C.com%5C/(%3F:%5Cw%7B2%7D%5C/)%3F(%5B%5E%5C/%5D%2B)%5C/(%3F:%5B%5E%5C/%5D%2B%5C/)%3F((%3F:id)%5Cd%2B).*%24/i,replace:%27https://apps.apple.com/cn/%241/%242%27%7D,%27microsoft.com/win10-store%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/www%5C.microsoft%5C.com%5C/%5Ba-zA-Z-%5D%7B2,5%7D%5C/p%5C/%5B%5E/%5D%2B%5C/(%5Ba-zA-Z0-9%5D%7B12,%7D)(%3F:%5B%5Ea-zA-Z0-9%5D.*%7C%24)/i,replace:%27https://www.microsoft.com/store/apps/%241%27%7D,%27chrome.google.com/webstore%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/chrome%5C.google%5C.com%5C/webstore%5C/detail%5C/%5B%5E%5C/%5D%2B%5C/(%5Ba-z%5D%7B32%7D).*/i,replace:%27https://chrome.google.com/webstore/detail/%241%27%7D,%27s.taobao.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/s%5C.taobao%5C.com%5C/search.*%24/i,replace:%27https://s.taobao.com/search%27,query:%5B%27q%27%5D%7D,%27list.tmall.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/list%5C.tmall%5C.com%5C/search_product%5C.htm.*%24/i,replace:%27https://list.tmall.com/search_product.htm%27,query:%5B%27q%27%5D%7D,%27item.taobao.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/item%5C.taobao%5C.com%5C/item%5C.htm.*%24/i,replace:%27https://item.taobao.com/item.htm%27,query:%5B%27id%27%5D%7D,%27detail.tmall.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/detail%5C.tmall%5C.com%5C/item%5C.htm.*%24/i,replace:%27https://detail.tmall.com/item.htm%27,query:%5B%27id%27%5D%7D,%27taobao/tmall.com/shop%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/(%5Cw%2B)%5C.(taobao%7Ctmall)%5C.com%5C/shop%5C/view_shop%5C.htm.*%24/i,replace:%27https://%241.%242.com/%27%7D,%27c.pc.qq.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/c%5C.pc%5C.qq%5C.com%5C/middle.html%5C%3F.*pfurl%3D(%5B%5E%26%5D*)(%3F:%26.*%24%7C%24)/i,replace:%27%241%27,query:%5B%5D,methods:%5B%27decodeUrl%27%5D%7D,%27item.m.jd.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/item%5C.m%5C.jd%5C.com%5C/product%5C/(%5Cd%2B)%5C.html(%5C%3F.*)%3F%24/i,replace:%27https://item.jd.com/%241.html%27%7D,%27item.m.jd.com/ware/%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/item%5C.m%5C.jd%5C.com%5C/ware%5C/view%5C.action%5C%3F.*wareId%3D(%5Cd%2B).*%24/i,replace:%27https://item.jd.com/%241.html%27%7D,%27search.jd.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/search%5C.jd%5C.com%5C/Search%5C%3F.*%24/i,query:%5B%27keyword%27,%27enc%27%5D%7D,%27re.jd.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/re%5C.jd%5C.com%5C/cps%5C/item%5C/(%5Cd%2B)%5C.html.*%24/i,replace:%27https://item.jd.com/%241.html%27%7D,%27weibo.com/u%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/(%3F:www%5C.)%3Fweibo%5C.com%5C/u%5C/(%5Cd%2B)(%5C%3F.*)%3F%24/i,replace:%27https://m.weibo.cn/%241%27%7D,%27weibo.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/(%3F:www%5C.)%3Fweibo%5C.com%5C/(%3F:%5Cd%2B)%5C/(%5Cw%2B)(%5C%3F.*)%3F%24/i,replace:%27https://m.weibo.cn/status/%241%27%7D,%27greasyfork.org/script/tabs%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/(%3F:www%5C.)%3Fgreasyfork%5C.org%5C/(%3F:%5B%5Cw-%5D*%5C/)%3Fscripts%5C/(%5Cd%2B)-%5B%5E//%5D*%5C/(code%7Cversions%7Cstats%7Cderivatives%7Cadmin).*%24/i,replace:%27https://greasyfork.org/scripts/%241/%242%27,hash:!0%7D,%27greasyfork.org%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/(%3F:www%5C.)%3Fgreasyfork%5C.org%5C/(%3F:%5B%5Cw-%5D*%5C/)%3F(scripts%7Cusers)%5C/(%5Cd%2B)-%5B%5E//%5D*%24/i,replace:%27https://greasyfork.org/%241/%242%27%7D,%27greasyfork.org/scripts/list%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/(%3F:www%5C.)%3Fgreasyfork%5C.org%5C/(%3F:%5B%5Cw-%5D*%5C/)%3Fscripts%5C%3F.*%24/i,query:%5B%27set%27,%27page%27%5D%7D,%27greasyfork.org/script/discussions%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/(%3F:www%5C.)%3Fgreasyfork%5C.org%5C/(%3F:%5B%5Cw-%5D*%5C/)%3Fscripts%5C/(%5Cd%2B)-%5B%5E//%5D*%5C/discussions%5C/(%5Cd%2B).*%24/i,replace:%27https://greasyfork.org/scripts/%241/discussions/%242%27,hash:!0%7D,%27greasyfork.org/discussions%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/(%3F:www%5C.)%3Fgreasyfork%5C.org%5C/(%3F:%5B%5Cw-%5D*%5C/)%3Fdiscussions%5C/(greasyfork%7Cdevelopment%7Crequests)%5C/(%5Cd%2B)(%3F:%5B%5E%5Cd%5D.*)%3F%24/i,replace:%27https://greasyfork.org/discussions/%241/%242%27,hash:!0%7D,%27store.steampowered.com%7Csteamcommunity.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/(store%5C.steampowered%7Csteamcommunity)%5C.com%5C/app%5C/(%5Cd%2B).*%24/i,replace:%27https://%241.com/app/%242%27%7D,%27meta.appinn.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/meta%5C.appinn%5C.net%5C/t(%3F:%5C/%5B%5E/%5D*)*%3F%5C/(%5Cd%2B)(%5C/.*%24%7C%24)/i,replace:%27https://meta.appinn.net/t/%241%27%7D,%27amazon.co.jp%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/(%3F:www%5C.)%3Famazon%5C.co%5C.jp%5C/(%5B%5E%5C/%5D%2B)%5C/dp%5C/(%5Cw%2B)%5C/.*%24/i,replace:%27https://www.amazon.co.jp/%241/dp/%242%27%7D,%27yangkeduo.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/mobile%5C.yangkeduo%5C.com%5C/goods.html%5C%3F.*%24/i,query:%5B%27goods_id%27%5D%7D,%27trello.com%27:%7BtestReg:/%5Ehttp(%3F:s)%3F:%5C/%5C/(%3F:www%5C.)%3Ftrello%5C.com%5C/(%5Cw)%5C/(%5Cw%2B)(%5C/.*%24%7C%24)/i,replace:%27https://trello.com/%241/%242%27,hash:!0%7D,other:%7BtestReg:/%5E(http(%3F:s)%3F:%5C/%5C/%5B%5E%3F%23%5D*)%5B%3F%23%5D.*%24/i,query:%5B%27id%27,%27tid%27,%27uid%27,%27q%27,%27wd%27,%27query%27,%27keyword%27,%27keywords%27%5D%7D%7D%3Bconst pureUrl%3Dfunction(url%3Dwindow.location.href)%7Bconst hash%3Durl.replace(/%5E%5B%5E%23%5D*(%23.*)%3F%24/,%27%241%27),base%3Durl.replace(/(%5C%3F%7C%23).*%24/,%27%27)%3Blet pureUrl%3Durl%3Bconst getQueryString%3Dfunction(key)%7Blet ret%3Durl.match(new RegExp(%27(%3F:%5C%5C%3F%7C%26)(%27%2Bkey%2B%27%3D%5B%5E%3F%23%26%5D*)%27,%27i%27))%3Breturn null%3D%3D%3Dret%3F%27%27:ret%5B1%5D%7D,methods%3D%7BdecodeUrl:function(url)%7Breturn decodeURIComponent(url)%7D%7D%3Bfor(let i in rules)%7Blet rule%3Drules%5Bi%5D,reg%3Drule.testReg,replace%3Drule.replace%3Bif(reg.test(url))%7Blet newQuerys%3D%27%27%3Bvoid 0!%3D%3Drule.query%26%26rule.query.length>0%26%26rule.query.map(query%3D>%7Bconst ret%3DgetQueryString(query)%3B%27%27!%3D%3Dret%26%26(newQuerys%2B%3D(newQuerys.length%3F%27%26%27:%27%3F%27)%2Bret)%7D),newQuerys%2B%3Dvoid 0!%3D%3Drule.hash%26%26rule.hash%3Fhash:%27%27,pureUrl%3D(void 0%3D%3D%3Dreplace%3Fbase:url.replace(reg,replace))%2BnewQuerys,void 0!%3D%3Drule.methods%26%26rule.methods.length>0%26%26rule.methods.map(methodName%3D>%7BpureUrl%3Dmethods%5BmethodName%5D(pureUrl)%7D)%3Bbreak%7D%7Dreturn pureUrl%7D()%3Blet newnode%3Ddocument.createElement(%27input%27)%3Bnewnode.id%3D%27pure-url-for-copy%27,newnode.value%3DpureUrl,document.body.appendChild(newnode)%3Blet copyinput%3Ddocument.getElementById(%27pure-url-for-copy%27)%3Bcopyinput.select()%3Btry%7Bdocument.execCommand(%27copy%27)%3Bwindow.location.href%3D%3D%3DpureUrl%3Fwindow.location.reload():window.location.href%3DpureUrl%7Dcatch(err)%7Bnull!%3Dprompt(%27净化后的网址是：%27,pureUrl)%26%26(window.location.href%3DpureUrl)%7Ddocument.body.removeChild(copyinput)%7D)()%3B