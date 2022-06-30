db = connect( 'mongodb://localhost/firma_docs_db' );
db.docs.drop();
db.docs.insertMany( 
    [{"_id":1,"name":"NullaElit.pdf","author":29,"path":"N9rVm2","mime":"application/pdf"},
    {"_id":2,"name":"Felis.mp3","author":75,"path":"b57vCP","mime":"audio/x-mpeg-3"},
    {"_id":3,"name":"SapienCumSociis.ppt","author":32,"path":"ICzsA6","mime":"application/vnd.ms-powerpoint"},
    {"_id":4,"name":"VitaeNisi.jpeg","author":55,"path":"7WIBIr","mime":"image/jpeg"},
    {"_id":5,"name":"Pellentesque.avi","author":45,"path":"XIGu2H","mime":"video/avi"},
    {"_id":6,"name":"OdioConsequat.avi","author":46,"path":"niVFWY","mime":"video/avi"},
    {"_id":7,"name":"ArcuSed.pdf","author":23,"path":"cFMMe8","mime":"application/pdf"},
    {"_id":8,"name":"FusceCongue.pdf","author":39,"path":"9xSKCQ","mime":"application/pdf"},
    {"_id":9,"name":"MassaQuis.jpeg","author":61,"path":"iFOHRM","mime":"image/pjpeg"},
    {"_id":10,"name":"LaciniaErat.doc","author":70,"path":"kc6xB4","mime":"application/msword"},
    {"_id":11,"name":"CurabiturIn.ppt","author":90,"path":"cu1jcR","mime":"application/vnd.ms-powerpoint"},
    {"_id":12,"name":"DignissimVestibulumVestibulum.mpeg","author":70,"path":"AT7YyS","mime":"video/mpeg"},
    {"_id":13,"name":"Nulla.xls","author":21,"path":"2NqQgE","mime":"application/excel"},
    {"_id":14,"name":"Nam.tiff","author":4,"path":"lxbed5","mime":"image/x-tiff"},
    {"_id":15,"name":"CurabiturInLibero.xls","author":91,"path":"KHXMuW","mime":"application/excel"},
    {"_id":16,"name":"DiamEratFermentum.doc","author":50,"path":"C4oy0U","mime":"application/msword"},
    {"_id":17,"name":"SollicitudinUtSuscipit.xls","author":33,"path":"NtRWdj","mime":"application/x-excel"},
    {"_id":18,"name":"VenenatisLacinia.tiff","author":3,"path":"Nd1Q1i","mime":"image/tiff"},
    {"_id":19,"name":"PedeMalesuada.xls","author":99,"path":"n9lW3l","mime":"application/vnd.ms-excel"},
    {"_id":20,"name":"Suscipit.mp3","author":68,"path":"XNnu3w","mime":"video/mpeg"},
    {"_id":21,"name":"Vel.xls","author":84,"path":"y4OJTr","mime":"application/x-excel"},
    {"_id":22,"name":"AliquamSitAmet.tiff","author":68,"path":"HamZbC","mime":"image/x-tiff"},
    {"_id":23,"name":"VolutpatQuamPede.xls","author":81,"path":"At4fsC","mime":"application/vnd.ms-excel"},
    {"_id":24,"name":"ProinInterdumMauris.ppt","author":74,"path":"NsQId8","mime":"application/x-mspowerpoint"},
    {"_id":25,"name":"VelSem.mov","author":57,"path":"jkcFFM","mime":"video/quicktime"},
    {"_id":26,"name":"Convallis.png","author":50,"path":"5A0KnD","mime":"image/png"},
    {"_id":27,"name":"EleifendQuamA.doc","author":58,"path":"QE0l24","mime":"application/msword"},
    {"_id":28,"name":"OrciLuctusEt.avi","author":20,"path":"OdY9eQ","mime":"video/avi"},
    {"_id":29,"name":"DolorSit.xls","author":79,"path":"V0zSum","mime":"application/x-msexcel"},
    {"_id":30,"name":"NonSodales.doc","author":36,"path":"1mwRGa","mime":"application/msword"},
    {"_id":31,"name":"Sit.tiff","author":10,"path":"4UDXo8","mime":"image/x-tiff"},
    {"_id":32,"name":"EgetTincidunt.avi","author":100,"path":"yZa9Ah","mime":"video/avi"},
    {"_id":33,"name":"EtiamVelAugue.tiff","author":46,"path":"d0c00i","mime":"image/x-tiff"},
    {"_id":34,"name":"VelitDonec.doc","author":46,"path":"tfwwky","mime":"application/msword"},
    {"_id":35,"name":"Ligula.tiff","author":65,"path":"xW6zzA","mime":"image/x-tiff"},
    {"_id":36,"name":"NisiAtNibh.tiff","author":58,"path":"pE6fPF","mime":"image/tiff"},
    {"_id":37,"name":"Pharetra.mp3","author":48,"path":"l9zN6j","mime":"video/x-mpeg"},
    {"_id":38,"name":"AmetNuncViverra.mp3","author":73,"path":"tze9If","mime":"audio/mpeg3"},
    {"_id":39,"name":"EgetVulputate.png","author":96,"path":"bSinOi","mime":"image/png"},
    {"_id":40,"name":"Non.ppt","author":23,"path":"GM37d7","mime":"application/powerpoint"},
    {"_id":41,"name":"Amet.ppt","author":26,"path":"gTMfXY","mime":"application/x-mspowerpoint"},
    {"_id":42,"name":"NamUltrices.avi","author":48,"path":"9ytTWy","mime":"video/msvideo"},
    {"_id":43,"name":"PrimisIn.mov","author":36,"path":"8BCI8i","mime":"video/quicktime"},
    {"_id":44,"name":"InTempusSit.avi","author":7,"path":"5rLOFo","mime":"video/avi"},
    {"_id":45,"name":"PosuereFelisSed.avi","author":22,"path":"Bq5cbq","mime":"video/x-msvideo"},
    {"_id":46,"name":"Aenean.ppt","author":84,"path":"5uu4to","mime":"application/x-mspowerpoint"},
    {"_id":47,"name":"OrciLuctus.png","author":95,"path":"7WOWK3","mime":"image/png"},
    {"_id":48,"name":"ElementumPellentesque.png","author":32,"path":"wC4KaK","mime":"image/png"},
    {"_id":49,"name":"TortorEu.ppt","author":10,"path":"m2Qg9l","mime":"application/powerpoint"},
    {"_id":50,"name":"VelitDonec.ppt","author":55,"path":"58kuRz","mime":"application/powerpoint"},
    {"_id":51,"name":"Lorem.mov","author":40,"path":"NVq0DP","mime":"video/quicktime"},
    {"_id":52,"name":"QuamNec.avi","author":75,"path":"tiZe5D","mime":"video/avi"},
    {"_id":53,"name":"VitaeMattis.mov","author":1,"path":"eFvrIG","mime":"video/quicktime"},
    {"_id":54,"name":"ElementumLigula.xls","author":79,"path":"Bgi1NB","mime":"application/x-msexcel"},
    {"_id":55,"name":"Primis.ppt","author":94,"path":"sqFztu","mime":"application/x-mspowerpoint"},
    {"_id":56,"name":"Tortor.txt","author":93,"path":"jpVFbs","mime":"text/plain"},
    {"_id":57,"name":"VariusNullaFacilisi.xls","author":85,"path":"vZSUvT","mime":"application/vnd.ms-excel"},
    {"_id":58,"name":"NullaQuisque.avi","author":46,"path":"yD48sF","mime":"video/x-msvideo"},
    {"_id":59,"name":"Sed.avi","author":49,"path":"Lmb69W","mime":"video/msvideo"},
    {"_id":60,"name":"In.ppt","author":30,"path":"g3kxYU","mime":"application/powerpoint"},
    {"_id":61,"name":"PosuereMetus.mpeg","author":32,"path":"KvNeFE","mime":"video/mpeg"},
    {"_id":62,"name":"CongueVivamus.tiff","author":41,"path":"WTARjS","mime":"image/tiff"},
    {"_id":63,"name":"VolutpatQuam.xls","author":23,"path":"6da3pW","mime":"application/vnd.ms-excel"},
    {"_id":64,"name":"NullaMollisMolestie.mpeg","author":53,"path":"PbLCzO","mime":"video/mpeg"},
    {"_id":65,"name":"In.xls","author":54,"path":"2rVhVa","mime":"application/x-excel"},
    {"_id":66,"name":"InMagna.txt","author":88,"path":"CwEOXB","mime":"text/plain"},
    {"_id":67,"name":"JustoLacinia.xls","author":28,"path":"NbVSnX","mime":"application/excel"},
    {"_id":68,"name":"MetusSapienUt.avi","author":20,"path":"3wl9Hk","mime":"application/x-troff-msvideo"},
    {"_id":69,"name":"LigulaVehiculaConsequat.txt","author":68,"path":"sOZFDp","mime":"text/plain"},
    {"_id":70,"name":"ConsequatDuiNec.mpeg","author":6,"path":"fjiCq1","mime":"video/mpeg"},
    {"_id":71,"name":"InHacHabitasse.avi","author":49,"path":"UaR9Yo","mime":"application/x-troff-msvideo"},
    {"_id":72,"name":"DonecUtMauris.mov","author":43,"path":"tfxfGd","mime":"video/quicktime"},
    {"_id":73,"name":"AliquetMaecenas.mp3","author":12,"path":"8vgr5w","mime":"video/x-mpeg"},
    {"_id":74,"name":"AtNunc.gif","author":5,"path":"Lspl36","mime":"image/gif"},
    {"_id":75,"name":"FaucibusCursusUrna.avi","author":13,"path":"FTFkAz","mime":"video/avi"},
    {"_id":76,"name":"Cum.xls","author":13,"path":"GfDYgM","mime":"application/vnd.ms-excel"},
    {"_id":77,"name":"EgetErosElementum.ppt","author":44,"path":"0BAiqO","mime":"application/powerpoint"},
    {"_id":78,"name":"Sit.jpeg","author":79,"path":"uc7MMz","mime":"image/pjpeg"},
    {"_id":79,"name":"Fusce.mp3","author":82,"path":"vfLuLp","mime":"audio/x-mpeg-3"},
    {"_id":80,"name":"LoremId.ppt","author":62,"path":"kbm3KL","mime":"application/mspowerpoint"},
    {"_id":81,"name":"Felis.mpeg","author":43,"path":"HZT2bf","mime":"video/mpeg"},
    {"_id":82,"name":"VulputateNonummyMaecenas.tiff","author":54,"path":"aqfckG","mime":"image/x-tiff"},
    {"_id":83,"name":"FelisSedLacus.jpeg","author":14,"path":"GiDHNa","mime":"image/pjpeg"},
    {"_id":84,"name":"EnimSitAmet.png","author":73,"path":"TjQQFS","mime":"image/png"},
    {"_id":85,"name":"DuisBibendumMorbi.tiff","author":57,"path":"pWcx7C","mime":"image/x-tiff"},
    {"_id":86,"name":"AugueQuamSollicitudin.pdf","author":29,"path":"2VT0E9","mime":"application/pdf"},
    {"_id":87,"name":"Duis.xls","author":88,"path":"XssBU2","mime":"application/excel"},
    {"_id":88,"name":"LaciniaNisiVenenatis.pdf","author":1,"path":"mDvHEx","mime":"application/pdf"},
    {"_id":89,"name":"CuraeDonec.xls","author":72,"path":"CjDLtF","mime":"application/x-excel"},
    {"_id":90,"name":"Ultrices.ppt","author":69,"path":"4ZO3wI","mime":"application/mspowerpoint"},
    {"_id":91,"name":"Venenatis.mp3","author":79,"path":"nxC7mi","mime":"audio/mpeg3"},
    {"_id":92,"name":"PedeMorbiPorttitor.tiff","author":52,"path":"9dc4mG","mime":"image/tiff"},
    {"_id":93,"name":"AugueVestibulumAnte.ppt","author":61,"path":"dRd4XG","mime":"application/x-mspowerpoint"},
    {"_id":94,"name":"IpsumAliquamNon.tiff","author":6,"path":"S02m5s","mime":"image/x-tiff"},
    {"_id":95,"name":"FaucibusOrci.avi","author":24,"path":"vuNz2j","mime":"application/x-troff-msvideo"},
    {"_id":96,"name":"VestibulumSagittis.avi","author":82,"path":"5Biv0R","mime":"video/avi"},
    {"_id":97,"name":"Sit.jpeg","author":4,"path":"MKHIKH","mime":"image/pjpeg"},
    {"_id":98,"name":"SitAmetCursus.mpeg","author":80,"path":"e3zZ8m","mime":"video/mpeg"},
    {"_id":99,"name":"IdNislVenenatis.xls","author":82,"path":"8aOVsF","mime":"application/excel"},
    {"_id":100,"name":"SapienPlacerat.txt","author":49,"path":"KuHad1","mime":"text/plain"}]
)