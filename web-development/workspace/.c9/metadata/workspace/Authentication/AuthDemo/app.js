{"filter":false,"title":"app.js","tooltip":"/Authentication/AuthDemo/app.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":61,"column":16},"end":{"row":61,"column":17},"action":"remove","lines":["'"],"id":657}],[{"start":{"row":61,"column":16},"end":{"row":61,"column":17},"action":"insert","lines":["\""],"id":658}],[{"start":{"row":61,"column":40},"end":{"row":61,"column":41},"action":"remove","lines":["'"],"id":659}],[{"start":{"row":61,"column":40},"end":{"row":61,"column":41},"action":"insert","lines":["\""],"id":660}],[{"start":{"row":61,"column":46},"end":{"row":61,"column":47},"action":"remove","lines":["'"],"id":661}],[{"start":{"row":61,"column":46},"end":{"row":61,"column":47},"action":"insert","lines":["\""],"id":662}],[{"start":{"row":62,"column":28},"end":{"row":62,"column":29},"action":"remove","lines":["'"],"id":663}],[{"start":{"row":62,"column":28},"end":{"row":62,"column":29},"action":"insert","lines":["\""],"id":664}],[{"start":{"row":62,"column":20},"end":{"row":62,"column":21},"action":"remove","lines":["'"],"id":665}],[{"start":{"row":62,"column":20},"end":{"row":62,"column":21},"action":"insert","lines":["\""],"id":666}],[{"start":{"row":63,"column":21},"end":{"row":63,"column":22},"action":"remove","lines":["'"],"id":667}],[{"start":{"row":63,"column":21},"end":{"row":63,"column":22},"action":"insert","lines":["\""],"id":668}],[{"start":{"row":63,"column":28},"end":{"row":63,"column":29},"action":"remove","lines":["'"],"id":669}],[{"start":{"row":63,"column":28},"end":{"row":63,"column":29},"action":"insert","lines":["\""],"id":670}],[{"start":{"row":61,"column":17},"end":{"row":61,"column":18},"action":"insert","lines":[" "],"id":672}],[{"start":{"row":61,"column":17},"end":{"row":61,"column":18},"action":"remove","lines":[" "],"id":673}],[{"start":{"row":61,"column":18},"end":{"row":61,"column":19},"action":"insert","lines":[" "],"id":674}],[{"start":{"row":61,"column":49},"end":{"row":61,"column":50},"action":"insert","lines":[" "],"id":675}],[{"start":{"row":62,"column":20},"end":{"row":62,"column":21},"action":"insert","lines":[" "],"id":676}],[{"start":{"row":65,"column":2},"end":{"row":65,"column":3},"action":"remove","lines":[" "],"id":678},{"start":{"row":65,"column":1},"end":{"row":65,"column":2},"action":"remove","lines":[" "]},{"start":{"row":65,"column":0},"end":{"row":65,"column":1},"action":"remove","lines":[" "]},{"start":{"row":64,"column":23},"end":{"row":65,"column":1},"action":"remove","lines":[""," "]}],[{"start":{"row":0,"column":0},"end":{"row":7,"column":63},"action":"remove","lines":["var express         = require(\"express\"),","","    mongoose        = require(\"mongoose\"),","    passport        = require(\"passport\"),","    bodyParser      = require(\"body-parser\"),","    User            = require(\"./models/user\"),","    LocalStrategy   = require(\"passport-local\"),","    passportLocalMongoose = require(\"passport-local-mongoose\");"],"id":680},{"start":{"row":0,"column":0},"end":{"row":6,"column":62},"action":"insert","lines":["var express               = require(\"express\"),","    mongoose              = require(\"mongoose\"),","    passport              = require(\"passport\"),","    bodyParser            = require(\"body-parser\"),","    User                  = require(\"./models/user\"),","    LocalStrategy         = require(\"passport-local\"),","    passportLocalMongoose = require(\"passport-local-mongoose\")"]}],[{"start":{"row":9,"column":0},"end":{"row":18,"column":4},"action":"remove","lines":["var app = express();","app.set('view engine', 'ejs');","","","app.use(bodyParser.urlencoded({extended: true}));","app.use(require(\"express-session\")({","    secret:'danielgao',","    resave: false,","    saveUninitialized: false","}));"],"id":681},{"start":{"row":9,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["var app = express();","app.set('view engine', 'ejs');","app.use(bodyParser.urlencoded({extended: true}));","app.use(require(\"express-session\")({","    secret: \"Rusty is the best and cutest dog in the world\",","    resave: false,","    saveUninitialized: false","}));"]}],[{"start":{"row":16,"column":4},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":682},{"start":{"row":17,"column":0},"end":{"row":18,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":23,"column":41},"end":{"row":23,"column":43},"action":"insert","lines":["()"],"id":684}],[{"start":{"row":64,"column":3},"end":{"row":65,"column":0},"action":"insert","lines":["",""],"id":685},{"start":{"row":65,"column":0},"end":{"row":66,"column":0},"action":"insert","lines":["",""]},{"start":{"row":66,"column":0},"end":{"row":66,"column":1},"action":"insert","lines":["a"]},{"start":{"row":66,"column":1},"end":{"row":66,"column":2},"action":"insert","lines":["p"]},{"start":{"row":66,"column":2},"end":{"row":66,"column":3},"action":"insert","lines":["p"]},{"start":{"row":66,"column":3},"end":{"row":66,"column":4},"action":"insert","lines":["."]},{"start":{"row":66,"column":4},"end":{"row":66,"column":5},"action":"insert","lines":["g"]},{"start":{"row":66,"column":5},"end":{"row":66,"column":6},"action":"insert","lines":["e"]}],[{"start":{"row":66,"column":4},"end":{"row":66,"column":6},"action":"remove","lines":["ge"],"id":686},{"start":{"row":66,"column":4},"end":{"row":66,"column":9},"action":"insert","lines":["get()"]}],[{"start":{"row":66,"column":8},"end":{"row":66,"column":10},"action":"insert","lines":["''"],"id":687}],[{"start":{"row":66,"column":9},"end":{"row":66,"column":10},"action":"insert","lines":["/"],"id":688},{"start":{"row":66,"column":10},"end":{"row":66,"column":11},"action":"insert","lines":["l"]},{"start":{"row":66,"column":11},"end":{"row":66,"column":12},"action":"insert","lines":["o"]},{"start":{"row":66,"column":12},"end":{"row":66,"column":13},"action":"insert","lines":["g"]},{"start":{"row":66,"column":13},"end":{"row":66,"column":14},"action":"insert","lines":["o"]}],[{"start":{"row":66,"column":14},"end":{"row":66,"column":15},"action":"insert","lines":["u"],"id":689},{"start":{"row":66,"column":15},"end":{"row":66,"column":16},"action":"insert","lines":["t"]}],[{"start":{"row":66,"column":17},"end":{"row":66,"column":18},"action":"insert","lines":[","],"id":690}],[{"start":{"row":66,"column":18},"end":{"row":66,"column":19},"action":"insert","lines":[" "],"id":691},{"start":{"row":66,"column":19},"end":{"row":66,"column":20},"action":"insert","lines":["f"]},{"start":{"row":66,"column":20},"end":{"row":66,"column":21},"action":"insert","lines":["u"]},{"start":{"row":66,"column":21},"end":{"row":66,"column":22},"action":"insert","lines":["n"]}],[{"start":{"row":66,"column":19},"end":{"row":66,"column":22},"action":"remove","lines":["fun"],"id":692},{"start":{"row":66,"column":19},"end":{"row":68,"column":1},"action":"insert","lines":["function(req, res) {","    ","}"]}],[{"start":{"row":67,"column":4},"end":{"row":67,"column":5},"action":"insert","lines":["r"],"id":693},{"start":{"row":67,"column":5},"end":{"row":67,"column":6},"action":"insert","lines":["e"]},{"start":{"row":67,"column":6},"end":{"row":67,"column":7},"action":"insert","lines":["a"]}],[{"start":{"row":67,"column":6},"end":{"row":67,"column":7},"action":"remove","lines":["a"],"id":694}],[{"start":{"row":67,"column":6},"end":{"row":67,"column":7},"action":"insert","lines":["s"],"id":695},{"start":{"row":67,"column":7},"end":{"row":67,"column":8},"action":"insert","lines":["."]},{"start":{"row":67,"column":8},"end":{"row":67,"column":9},"action":"insert","lines":["s"]},{"start":{"row":67,"column":9},"end":{"row":67,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":67,"column":10},"end":{"row":67,"column":11},"action":"insert","lines":["n"],"id":696},{"start":{"row":67,"column":11},"end":{"row":67,"column":12},"action":"insert","lines":["d"]}],[{"start":{"row":67,"column":12},"end":{"row":67,"column":14},"action":"insert","lines":["()"],"id":697}],[{"start":{"row":67,"column":13},"end":{"row":67,"column":15},"action":"insert","lines":["''"],"id":698}],[{"start":{"row":67,"column":14},"end":{"row":67,"column":15},"action":"insert","lines":["l"],"id":699},{"start":{"row":67,"column":15},"end":{"row":67,"column":16},"action":"insert","lines":["o"]},{"start":{"row":67,"column":16},"end":{"row":67,"column":17},"action":"insert","lines":["g"]}],[{"start":{"row":67,"column":17},"end":{"row":67,"column":18},"action":"insert","lines":[" "],"id":700},{"start":{"row":67,"column":18},"end":{"row":67,"column":19},"action":"insert","lines":["o"]},{"start":{"row":67,"column":19},"end":{"row":67,"column":20},"action":"insert","lines":["u"]},{"start":{"row":67,"column":20},"end":{"row":67,"column":21},"action":"insert","lines":["t"]}],[{"start":{"row":67,"column":8},"end":{"row":67,"column":23},"action":"remove","lines":["send('log out')"],"id":701},{"start":{"row":67,"column":8},"end":{"row":67,"column":9},"action":"insert","lines":["l"]},{"start":{"row":67,"column":9},"end":{"row":67,"column":10},"action":"insert","lines":["o"]},{"start":{"row":67,"column":10},"end":{"row":67,"column":11},"action":"insert","lines":["g"]},{"start":{"row":67,"column":11},"end":{"row":67,"column":12},"action":"insert","lines":["p"]},{"start":{"row":67,"column":12},"end":{"row":67,"column":13},"action":"insert","lines":["u"]},{"start":{"row":67,"column":13},"end":{"row":67,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":67,"column":13},"end":{"row":67,"column":14},"action":"remove","lines":["t"],"id":702},{"start":{"row":67,"column":12},"end":{"row":67,"column":13},"action":"remove","lines":["u"]},{"start":{"row":67,"column":11},"end":{"row":67,"column":12},"action":"remove","lines":["p"]}],[{"start":{"row":67,"column":11},"end":{"row":67,"column":12},"action":"insert","lines":["o"],"id":703},{"start":{"row":67,"column":12},"end":{"row":67,"column":13},"action":"insert","lines":["u"]},{"start":{"row":67,"column":13},"end":{"row":67,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":67,"column":14},"end":{"row":67,"column":16},"action":"insert","lines":["()"],"id":704}],[{"start":{"row":67,"column":16},"end":{"row":67,"column":17},"action":"insert","lines":[";"],"id":705}],[{"start":{"row":67,"column":17},"end":{"row":68,"column":0},"action":"insert","lines":["",""],"id":706},{"start":{"row":68,"column":0},"end":{"row":68,"column":4},"action":"insert","lines":["    "]},{"start":{"row":68,"column":4},"end":{"row":68,"column":5},"action":"insert","lines":["r"]},{"start":{"row":68,"column":5},"end":{"row":68,"column":6},"action":"insert","lines":["e"]},{"start":{"row":68,"column":6},"end":{"row":68,"column":7},"action":"insert","lines":["s"]},{"start":{"row":68,"column":7},"end":{"row":68,"column":8},"action":"insert","lines":["."]},{"start":{"row":68,"column":8},"end":{"row":68,"column":9},"action":"insert","lines":["r"]},{"start":{"row":68,"column":9},"end":{"row":68,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":68,"column":10},"end":{"row":68,"column":11},"action":"insert","lines":["d"],"id":707}],[{"start":{"row":68,"column":8},"end":{"row":68,"column":11},"action":"remove","lines":["red"],"id":708},{"start":{"row":68,"column":8},"end":{"row":68,"column":16},"action":"insert","lines":["redirect"]}],[{"start":{"row":68,"column":16},"end":{"row":68,"column":18},"action":"insert","lines":["()"],"id":709}],[{"start":{"row":68,"column":17},"end":{"row":68,"column":19},"action":"insert","lines":["''"],"id":710}],[{"start":{"row":68,"column":18},"end":{"row":68,"column":19},"action":"insert","lines":["/"],"id":711}],[{"start":{"row":67,"column":6},"end":{"row":67,"column":7},"action":"remove","lines":["s"],"id":712},{"start":{"row":67,"column":6},"end":{"row":67,"column":7},"action":"insert","lines":["q"]}],[{"start":{"row":70,"column":0},"end":{"row":71,"column":0},"action":"insert","lines":["",""],"id":713},{"start":{"row":71,"column":0},"end":{"row":71,"column":1},"action":"insert","lines":["f"]},{"start":{"row":71,"column":1},"end":{"row":71,"column":2},"action":"insert","lines":["u"]},{"start":{"row":71,"column":2},"end":{"row":71,"column":3},"action":"insert","lines":["n"]},{"start":{"row":71,"column":3},"end":{"row":71,"column":4},"action":"insert","lines":["c"]}],[{"start":{"row":71,"column":0},"end":{"row":71,"column":4},"action":"remove","lines":["func"],"id":714},{"start":{"row":71,"column":0},"end":{"row":71,"column":8},"action":"insert","lines":["function"]}],[{"start":{"row":71,"column":8},"end":{"row":71,"column":9},"action":"insert","lines":[" "],"id":715},{"start":{"row":71,"column":9},"end":{"row":71,"column":10},"action":"insert","lines":["i"]},{"start":{"row":71,"column":10},"end":{"row":71,"column":11},"action":"insert","lines":["s"]}],[{"start":{"row":71,"column":11},"end":{"row":71,"column":12},"action":"insert","lines":["L"],"id":716},{"start":{"row":71,"column":12},"end":{"row":71,"column":13},"action":"insert","lines":["o"]},{"start":{"row":71,"column":13},"end":{"row":71,"column":14},"action":"insert","lines":["g"]},{"start":{"row":71,"column":14},"end":{"row":71,"column":15},"action":"insert","lines":["g"]},{"start":{"row":71,"column":15},"end":{"row":71,"column":16},"action":"insert","lines":["i"]}],[{"start":{"row":71,"column":15},"end":{"row":71,"column":16},"action":"remove","lines":["i"],"id":717}],[{"start":{"row":71,"column":15},"end":{"row":71,"column":16},"action":"insert","lines":["e"],"id":718},{"start":{"row":71,"column":16},"end":{"row":71,"column":17},"action":"insert","lines":["d"]},{"start":{"row":71,"column":17},"end":{"row":71,"column":18},"action":"insert","lines":["I"]},{"start":{"row":71,"column":18},"end":{"row":71,"column":19},"action":"insert","lines":["n"]}],[{"start":{"row":71,"column":19},"end":{"row":71,"column":21},"action":"insert","lines":["()"],"id":719}],[{"start":{"row":71,"column":20},"end":{"row":71,"column":21},"action":"insert","lines":["r"],"id":720},{"start":{"row":71,"column":21},"end":{"row":71,"column":22},"action":"insert","lines":["e"]},{"start":{"row":71,"column":22},"end":{"row":71,"column":23},"action":"insert","lines":["q"]},{"start":{"row":71,"column":23},"end":{"row":71,"column":24},"action":"insert","lines":["m"]}],[{"start":{"row":71,"column":24},"end":{"row":71,"column":25},"action":"insert","lines":[" "],"id":721}],[{"start":{"row":71,"column":24},"end":{"row":71,"column":25},"action":"remove","lines":[" "],"id":722},{"start":{"row":71,"column":23},"end":{"row":71,"column":24},"action":"remove","lines":["m"]}],[{"start":{"row":71,"column":23},"end":{"row":71,"column":24},"action":"insert","lines":[","],"id":723},{"start":{"row":71,"column":24},"end":{"row":71,"column":25},"action":"insert","lines":["r"]}],[{"start":{"row":71,"column":24},"end":{"row":71,"column":25},"action":"remove","lines":["r"],"id":724}],[{"start":{"row":71,"column":24},"end":{"row":71,"column":25},"action":"insert","lines":[" "],"id":725},{"start":{"row":71,"column":25},"end":{"row":71,"column":26},"action":"insert","lines":["r"]},{"start":{"row":71,"column":26},"end":{"row":71,"column":27},"action":"insert","lines":["e"]},{"start":{"row":71,"column":27},"end":{"row":71,"column":28},"action":"insert","lines":["s"]}],[{"start":{"row":71,"column":28},"end":{"row":71,"column":29},"action":"insert","lines":[","],"id":726}],[{"start":{"row":71,"column":29},"end":{"row":71,"column":30},"action":"insert","lines":[" "],"id":727},{"start":{"row":71,"column":30},"end":{"row":71,"column":31},"action":"insert","lines":["n"]},{"start":{"row":71,"column":31},"end":{"row":71,"column":32},"action":"insert","lines":["e"]},{"start":{"row":71,"column":32},"end":{"row":71,"column":33},"action":"insert","lines":["x"]},{"start":{"row":71,"column":33},"end":{"row":71,"column":34},"action":"insert","lines":["t"]}],[{"start":{"row":71,"column":35},"end":{"row":71,"column":36},"action":"insert","lines":["{"],"id":728}],[{"start":{"row":71,"column":36},"end":{"row":73,"column":1},"action":"insert","lines":["","    ","}"],"id":729}],[{"start":{"row":72,"column":4},"end":{"row":72,"column":5},"action":"insert","lines":["i"],"id":730},{"start":{"row":72,"column":5},"end":{"row":72,"column":6},"action":"insert","lines":["f"]}],[{"start":{"row":72,"column":6},"end":{"row":72,"column":8},"action":"insert","lines":["()"],"id":731}],[{"start":{"row":72,"column":7},"end":{"row":72,"column":8},"action":"insert","lines":["r"],"id":732},{"start":{"row":72,"column":8},"end":{"row":72,"column":9},"action":"insert","lines":["e"]},{"start":{"row":72,"column":9},"end":{"row":72,"column":10},"action":"insert","lines":["q"]},{"start":{"row":72,"column":10},"end":{"row":72,"column":11},"action":"insert","lines":["."]},{"start":{"row":72,"column":11},"end":{"row":72,"column":12},"action":"insert","lines":["i"]}],[{"start":{"row":72,"column":12},"end":{"row":72,"column":13},"action":"insert","lines":["s"],"id":733},{"start":{"row":72,"column":13},"end":{"row":72,"column":14},"action":"insert","lines":["A"]},{"start":{"row":72,"column":14},"end":{"row":72,"column":15},"action":"insert","lines":["u"]}],[{"start":{"row":72,"column":15},"end":{"row":72,"column":16},"action":"insert","lines":["t"],"id":734},{"start":{"row":72,"column":16},"end":{"row":72,"column":17},"action":"insert","lines":["h"]},{"start":{"row":72,"column":17},"end":{"row":72,"column":18},"action":"insert","lines":["e"]},{"start":{"row":72,"column":18},"end":{"row":72,"column":19},"action":"insert","lines":["n"]}],[{"start":{"row":72,"column":19},"end":{"row":72,"column":20},"action":"insert","lines":["t"],"id":735},{"start":{"row":72,"column":20},"end":{"row":72,"column":21},"action":"insert","lines":["i"]},{"start":{"row":72,"column":21},"end":{"row":72,"column":22},"action":"insert","lines":["c"]},{"start":{"row":72,"column":22},"end":{"row":72,"column":23},"action":"insert","lines":["a"]},{"start":{"row":72,"column":23},"end":{"row":72,"column":24},"action":"insert","lines":["t"]},{"start":{"row":72,"column":24},"end":{"row":72,"column":25},"action":"insert","lines":["e"]},{"start":{"row":72,"column":25},"end":{"row":72,"column":26},"action":"insert","lines":["d"]}],[{"start":{"row":72,"column":26},"end":{"row":72,"column":28},"action":"insert","lines":["()"],"id":736}],[{"start":{"row":72,"column":29},"end":{"row":72,"column":30},"action":"insert","lines":["{"],"id":737}],[{"start":{"row":72,"column":30},"end":{"row":74,"column":5},"action":"insert","lines":["","        ","    }"],"id":738}],[{"start":{"row":73,"column":8},"end":{"row":73,"column":9},"action":"insert","lines":["r"],"id":739},{"start":{"row":73,"column":9},"end":{"row":73,"column":10},"action":"insert","lines":["e"]},{"start":{"row":73,"column":10},"end":{"row":73,"column":11},"action":"insert","lines":["t"]},{"start":{"row":73,"column":11},"end":{"row":73,"column":12},"action":"insert","lines":["u"]},{"start":{"row":73,"column":12},"end":{"row":73,"column":13},"action":"insert","lines":["r"]},{"start":{"row":73,"column":13},"end":{"row":73,"column":14},"action":"insert","lines":["n"]}],[{"start":{"row":73,"column":14},"end":{"row":73,"column":15},"action":"insert","lines":[" "],"id":740},{"start":{"row":73,"column":15},"end":{"row":73,"column":16},"action":"insert","lines":["n"]},{"start":{"row":73,"column":16},"end":{"row":73,"column":17},"action":"insert","lines":["e"]},{"start":{"row":73,"column":17},"end":{"row":73,"column":18},"action":"insert","lines":["x"]},{"start":{"row":73,"column":18},"end":{"row":73,"column":19},"action":"insert","lines":["t"]}],[{"start":{"row":73,"column":19},"end":{"row":73,"column":21},"action":"insert","lines":["()"],"id":741}],[{"start":{"row":73,"column":21},"end":{"row":73,"column":22},"action":"insert","lines":[";"],"id":742}],[{"start":{"row":74,"column":5},"end":{"row":75,"column":0},"action":"insert","lines":["",""],"id":743},{"start":{"row":75,"column":0},"end":{"row":75,"column":4},"action":"insert","lines":["    "]},{"start":{"row":75,"column":4},"end":{"row":75,"column":5},"action":"insert","lines":["r"]},{"start":{"row":75,"column":5},"end":{"row":75,"column":6},"action":"insert","lines":["e"]},{"start":{"row":75,"column":6},"end":{"row":75,"column":7},"action":"insert","lines":["s"]},{"start":{"row":75,"column":7},"end":{"row":75,"column":8},"action":"insert","lines":["."]}],[{"start":{"row":75,"column":8},"end":{"row":75,"column":9},"action":"insert","lines":["r"],"id":744},{"start":{"row":75,"column":9},"end":{"row":75,"column":10},"action":"insert","lines":["e"]},{"start":{"row":75,"column":10},"end":{"row":75,"column":11},"action":"insert","lines":["d"]},{"start":{"row":75,"column":11},"end":{"row":75,"column":12},"action":"insert","lines":["i"]}],[{"start":{"row":75,"column":8},"end":{"row":75,"column":12},"action":"remove","lines":["redi"],"id":745},{"start":{"row":75,"column":8},"end":{"row":75,"column":16},"action":"insert","lines":["redirect"]}],[{"start":{"row":75,"column":16},"end":{"row":75,"column":18},"action":"insert","lines":["()"],"id":746}],[{"start":{"row":75,"column":17},"end":{"row":75,"column":19},"action":"insert","lines":["''"],"id":747}],[{"start":{"row":75,"column":18},"end":{"row":75,"column":19},"action":"insert","lines":["/"],"id":748},{"start":{"row":75,"column":19},"end":{"row":75,"column":20},"action":"insert","lines":["l"]},{"start":{"row":75,"column":20},"end":{"row":75,"column":21},"action":"insert","lines":["o"]},{"start":{"row":75,"column":21},"end":{"row":75,"column":22},"action":"insert","lines":["g"]}],[{"start":{"row":75,"column":22},"end":{"row":75,"column":23},"action":"insert","lines":["i"],"id":749},{"start":{"row":75,"column":23},"end":{"row":75,"column":24},"action":"insert","lines":["n"]}],[{"start":{"row":75,"column":26},"end":{"row":75,"column":27},"action":"insert","lines":[";"],"id":750}],[{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":["u"],"id":751},{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"insert","lines":["s"]}],[{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"remove","lines":["s"],"id":752},{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"remove","lines":["u"]}],[{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":["i"],"id":753},{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"insert","lines":["s"]},{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":["l"]},{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"insert","lines":["o"]},{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"insert","lines":["g"]}],[{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"remove","lines":["g"],"id":754},{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"remove","lines":["o"]},{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"remove","lines":["l"]}],[{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":["L"],"id":755},{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"insert","lines":["i"]}],[{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"remove","lines":["i"],"id":756}],[{"start":{"row":30,"column":19},"end":{"row":30,"column":30},"action":"remove","lines":["isLfunction"],"id":757},{"start":{"row":30,"column":19},"end":{"row":30,"column":29},"action":"insert","lines":["isLoggedIn"]}],[{"start":{"row":30,"column":29},"end":{"row":30,"column":30},"action":"insert","lines":[","],"id":758}],[{"start":{"row":30,"column":30},"end":{"row":30,"column":31},"action":"insert","lines":[" "],"id":759}],[{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"insert","lines":["f"],"id":760},{"start":{"row":30,"column":32},"end":{"row":30,"column":33},"action":"insert","lines":["u"]},{"start":{"row":30,"column":33},"end":{"row":30,"column":34},"action":"insert","lines":["n"]},{"start":{"row":30,"column":34},"end":{"row":30,"column":35},"action":"insert","lines":["c"]}],[{"start":{"row":30,"column":31},"end":{"row":30,"column":35},"action":"remove","lines":["func"],"id":761},{"start":{"row":30,"column":31},"end":{"row":30,"column":39},"action":"insert","lines":["function"]}]]},"ace":{"folds":[],"scrolltop":847.78125,"scrollleft":0,"selection":{"start":{"row":53,"column":20},"end":{"row":53,"column":20},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":54,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1557793712295,"hash":"03b98ff2b166f97475da12765e15d5e49c5899c4"}