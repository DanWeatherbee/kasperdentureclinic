$('window').ready(function() {
    app.editServicesH1();
    app.editServicesH3();
    app.editServicesP();
    app.editServicesUl();
    app.editServicesParallaxQuote();
    app.editServicesH3_2();
    app.editServicesH3_3();
    app.editServicesH3_4();
    app.editServicesH3_5();
    app.editServicesH3_6();
    app.editServicesH3_7();
    app.editServicesH3_8();
    app.editServicesP1();
    app.editServicesP2();
    app.editServicesP3();
    app.editServicesP4();
    app.editServicesP5();
    app.editServicesP6();
    app.editServicesP7();
    app.editServicesP8();
    app.editServicesFaqH1();
    app.editServicesH2Faq_1();
    app.editServicesH2Faq_2();
    app.editServicesH2Faq_3();
    app.editServicesH2Faq_4();
    app.editServicesPFaq_1();
    app.editServicesPFaq_2();
    app.editServicesPFaq_3();
    app.editServicesPFaq_4();
    app.editServicesMapH2();
    app.editServicesMapP();
    $('#root').prepend('<i class="fa fa-edit edit-btns-edit-fixed" id="edit-services-page" onclick="editServicesPage()"> -- Edit Page</i>');
    $('#root').prepend('<i class="fa fa-save edit-btns-save-fixed" id="save-services-page" onclick="saveServicesPage()"> -- Save Page</i>');
    $('#root').prepend('<i class="fa fa-refresh edit-btns-default-fixed" id="default-services-page" onclick="clearServicesPage()"> -- Default</i>');
    editServicesPage();
    $('.fa').hide();
    $('#services-move-to-parallax-icon').show();
    $('#edit-services-page').fadeIn();
});

var editServicesPage = function() {
    $('.fa').fadeIn();
    $('#edit-services-page').hide();
};

var saveServicesPage = function() {
    // Download databases. ===============================================

    var dbServicesEdited = localStorage.getItem('dataServicesEdited');
    var dbServicesDefault = localStorage.getItem('dataServicesDefault');

    // Download edited database.
    var defaultServicesDB = new File([dbServicesEdited], "dataServicesEdited.json");

    // Download default database.
    var editedServicesDB = new File([dbServicesDefault], "dataServicesDefault.json");

    // Save to downloads folder.
    saveAs(defaultServicesDB);
    saveAs(editedServicesDB);
    $('#save-services-page').hide();
    $('#edit-services-page').fadeIn();
};

// Reset to default.
var clearServicesPage = function() {
    localStorage.clear();
    location.reload();
};

// ==================================================================