var express=require("express");
var router=express.Router({mergeParams: true});
const dataset= require('../public/myData.json');
var passport=require("passport");


////////////////////////////////////////////////about yps
router.get("/yps_foundation",function(req,res){
    const images=dataset[0].images;
    const data=dataset[0].data;
    const heading=dataset[0].heading;
    const subtopics=dataset[0].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});

router.get("/our_founder",function(req,res){
    const images=dataset[1].images;
    const data=dataset[1].data;
    const heading=dataset[1].heading;
    const subtopics=dataset[1].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});


router.get("/board_members",function(req,res){
    const images=dataset[2].images;
    const data=dataset[2].data;
    const heading=dataset[2].heading;
    const subtopics=dataset[2].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});

router.get("/vision",function(req,res){
    const images=dataset[3].images;
    const data=dataset[3].data;
    const heading=dataset[3].heading;
    const subtopics=dataset[3].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});


router.get("/head_master",function(req,res){
    const images=dataset[4].images;
    const data=dataset[4].data;
    const heading=dataset[4].heading;
    const subtopics=dataset[4].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});


router.get("/view_management",function(req,res){
    const images=dataset[5].images;
    const data=dataset[5].data;
    const heading=dataset[5].heading;
    const subtopics=dataset[5].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});


router.get("/staff",function(req,res){
    const images=dataset[6].images;
    const data=dataset[6].data;
    const heading=dataset[6].heading;
    const subtopics=dataset[6].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});

////////////////////////////////////////////////admissions
router.get("/admission_procedure",function(req,res){
    res.render("mySchool/procedure");
});

// router.get("/register_online",function(req,res){
//     res.redirect("/");

//     const images=dataset[8].images;
//     const data=dataset[8].data;
//     const heading=dataset[8].heading;
//     const subtopics=dataset[8].subtopics;
//     res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
// });

// router.get("/download_forms",function(req,res){
//     res.redirect("/");

//     const images=dataset[9].images;
//     const data=dataset[9].data;
//     const heading=dataset[9].heading;
//     const subtopics=dataset[9].subtopics;
//     res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
// });

// router.get("/school_prospectus",function(req,res){
//     res.redirect("/");

//     const images=dataset[10].images;
//     const data=dataset[10].data;
//     const heading=dataset[10].heading;
//     const subtopics=dataset[10].subtopics;
//     res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
// });

router.get("/fees_structure",function(req,res){
    res.render("mySchool/fees");
});

// router.get("/syllabus",function(req,res){
//     res.redirect("/");

//     const images=dataset[12].images;
//     const data=dataset[12].data;
//     const heading=dataset[12].heading;
//     const subtopics=dataset[12].subtopics;
//     res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
// });

// router.get("/foundation_wing_admissions",function(req,res){
//     res.redirect("/");

//     const images=dataset[13].images;
//     const data=dataset[13].data;
//     const heading=dataset[13].heading;
//     const subtopics=dataset[13].subtopics;
//     res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
// });

////////////////////////////////////////////////facilities

router.get("/school_campus",function(req,res){
    const images=dataset[14].images;
    const data=dataset[14].data;
    const heading=dataset[14].heading;
    const subtopics=dataset[14].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});

router.get("/academics",function(req,res){
    const images=dataset[15].images;
    const data=dataset[15].data;
    const heading=dataset[15].heading;
    const subtopics=dataset[15].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});

router.get("/sports_games",function(req,res){
    const images=dataset[16].images;
    const data=dataset[16].data;
    const heading=dataset[16].heading;
    const subtopics=dataset[16].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});

router.get("/activities",function(req,res){
    const images=dataset[17].images;
    const data=dataset[17].data;
    const heading=dataset[17].heading;
    const subtopics=dataset[17].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});

router.get("/boarding",function(req,res){
    const images=dataset[18].images;
    const data=dataset[18].data;
    const heading=dataset[18].heading;
    const subtopics=dataset[18].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});

////////////////////////////////////////////////academics

router.get("/roll_of_honours",function(req,res){
    
    res.render("mySchool/honours");
});


////////////////////////////////////////////////alumni

// router.get("/alumni_platform",function(req,res){
//     res.redirect("/");
//     const images=dataset[20].images;
//     const data=dataset[20].data;
//     const heading=dataset[20].heading;
//     const subtopics=dataset[20].subtopics;
//     res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
// });

router.get("/about_ayosa",function(req,res){
    const images=dataset[21].images;
    const data=dataset[21].data;
    const heading=dataset[21].heading;
    const subtopics=dataset[21].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});

////////////////////////////////////////////////internationalism

router.get("/internationalism",function(req,res){
    const images=dataset[22].images;
    const data=dataset[22].data;
    const heading=dataset[22].heading;
    const subtopics=dataset[22].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});


////////////////////////////////////////////////covid_adaptation

router.get("/covid_adaptation",function(req,res){
    const images=dataset[23].images;
    const data=dataset[23].data;
    const heading=dataset[23].heading;
    const subtopics=dataset[23].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});

////////////////////////////////////////////////blog

router.get("/blog",function(req,res){
    res.redirect("/");
    const images=dataset[24].images;
    const data=dataset[24].data;
    const heading=dataset[24].heading;
    const subtopics=dataset[24].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});


////////////////////////////////////////////////contact

router.get("/contact",function(req,res){
    res.render("mySchool/contact");
});


///////////////////////////////////////////////landing page


router.get("/media",function(req,res){
    res.render("mySchool/media");
});

router.get("/sports_acheivement",function(req,res){
    const images=dataset[26].images;
    const data=dataset[26].data;
    const heading=dataset[26].heading;
    const subtopics=dataset[26].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});

router.get("/co_curricular_activities",function(req,res){
    const images=dataset[27].images;
    const data=dataset[27].data;
    const heading=dataset[27].heading;
    const subtopics=dataset[27].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});

router.get("/virtual_tour",function(req,res){
    res.render("mySchool/virtualTour");
});

router.get("/yps_creative_book",function(req,res){
    res.render("mySchool/ypsCreativeBook");
});

router.get("/yps_times",function(req,res){
    const images=dataset[28].images;
    const data=dataset[28].data;
    const heading=dataset[28].heading;
    const subtopics=dataset[28].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});

router.get("/school_year_back",function(req,res){
    const images=dataset[29].images;
    const data=dataset[29].data;
    const heading=dataset[29].heading;
    const subtopics=dataset[29].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});

///////////////////////////////////notice board
router.get("/additions_BOQ",function(req,res){
    const myHeading="Additions to BOQ";
    const myPDF="pdf2";
    res.render("mySchool/noticeTemplate",{heading:myHeading,pdf:myPDF});
});
router.get("/drawings",function(req,res){
    const myHeading="Drawings";
    const myPDF="pdf3";
    res.render("mySchool/noticeTemplate",{heading:myHeading,pdf:myPDF});
});
router.get("/specifications",function(req,res){
    const myHeading="Specifications & Approved Makes";
    const myPDF="pdf5";
    res.render("mySchool/noticeTemplate",{heading:myHeading,pdf:myPDF});
});
router.get("/swimmingPool",function(req,res){
    const myHeading="BOQ FOR CONSTRUCTION OF SWIMMING POOL AT YPS PATIALA";
    const myPDF="pdf4";
    res.render("mySchool/noticeTemplate",{heading:myHeading,pdf:myPDF});
});

router.get("/read_more",function(req,res){
    const images=dataset[30].images;
    const data=dataset[30].data;
    const heading=dataset[30].heading;
    const subtopics=dataset[30].subtopics;
    res.render("mySchool/myTemplate",{images:images,data:data,heading:heading,subtopics:subtopics});
});







module.exports = router;