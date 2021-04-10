// Set Chrome storage variables
// Empty right now... :|

chrome.storage.local.get("zen_mode", function(data) {
    if (data.zen_mode != undefined) {
        // Assign to the script
        assignChromeStorageLocally("1", data.zen_mode);
    }
});

setInterval(function() {
    chrome.storage.local.get("zen_mode", function(data) {
        if (data.zen_mode != undefined) {
            hideElements(data.zen_mode);
        }
    });
}, 1000);

// Global variables
var zen_state = 0;

/* =====================
 * Function name: assignChromeStorageLocally
 * Function description: this function will assign Chrome storage variables locally
 * Date: 22/02/21
 * =====================
 */
function assignChromeStorageLocally(variable, value) {
    if (variable == "1") {
        zen_state = value;
    }
}

/*
 * Function name: hideElements
 * Function description: this function will hide "bad" elements on the Amazon page to create a zen shopping experience.
 * Date: 09/04/21
 */
function hideElements(state) {
    // Check if zen state has been changed
    if (state != zen_state) {
        // Inform user
        window.alert("Zen state has changed. Reloading the page.");

        // Reload page
        location.reload();
    }

    // Hide Kindle advertisement
    if ($("div[name='goKindleStaticPopDiv']").length > 0) {
        // Hide Kindle advertisement
        $("div[name='goKindleStaticPopDiv']").hide();
    }

    // Hide author information
    if ($("#authorFollow_feature_div").length > 0) {
        // Hide author information
        $("#authorFollow_feature_div").hide();
    }

    // Hide advertisement bucket
    if ($("#quickPromoBucketContent").length > 0) {
    // Hide advertisement bucket
        $("#quickPromoBucketContent").hide();
    }

    // Hide frequently bought together
    if ($("#sims-fbt").length > 0) {
        // Hide frequently bought together
        $("#sims-fbt").hide();
    }

    // Hide customers also viewed
    if ($("div[cel_widget_id='sims-consolidated-1_csm_instrumentation_wrapper']").length > 0) {
        // Hide customers also viewed
        $("div[cel_widget_id='sims-consolidated-1_csm_instrumentation_wrapper']").hide();
    }

    // Hide customers also viewed
    if ($("div[cel_widget_id='sims-consolidated-2_csm_instrumentation_wrapper']").length > 0) {
        // Hide customers also viewed
        $("div[cel_widget_id='sims-consolidated-2_csm_instrumentation_wrapper']").hide();
    }

    // Hide customers also viewed
    if ($("div[cel_widget_id='sims-consolidated-3_csm_instrumentation_wrapper']").length > 0) {
        // Hide customers also viewed
        $("div[cel_widget_id='sims-consolidated-3_csm_instrumentation_wrapper']").hide();
    }

    // Hide customers also viewed
    if ($("div[cel_widget_id='sims-consolidated-4_csm_instrumentation_wrapper']").length > 0) {
        // Hide customers also viewed
        $("div[cel_widget_id='sims-consolidated-4_csm_instrumentation_wrapper']").hide();
    }

    // Hide sponsered products
    if ($("#sponsoredProducts_feature_div").length > 0) {
        // Hide sponsered products
        $("#sponsoredProducts_feature_div").hide();
    }

    // Hide sponsered products
    if ($("#sponsoredProducts2_feature_div").length > 0) {
        // Hide sponsered products
        $("#sponsoredProducts2_feature_div").hide();
    }

    // Hide rating
    if ($("#CardInstancef2A3nyWv_WvhH1P3OirO5w").length > 0) {
        // Hide rating
        $("#CardInstancef2A3nyWv_WvhH1P3OirO5w").hide();
    }

    // Hide right rail
    if ($("#rightRail").length > 0) {
        // Hide right rail
        $("#rightRail").hide();
    }

    // Hide author
    if ($("#books-entity-teaser").length > 0) {
        // Hide author
        $("#books-entity-teaser").hide();
    }

    // Hide seasonal promo
    if ($("#navSwmHoliday").length > 0) {
        // Hide seasonal promo
        $("#navSwmHoliday").hide();
    }

    // Hide "Buy Now"
    if ($("#buyNow").length > 0) {
        // Hide "Buy Now"
        $("#buyNow").hide();
    }

    // Hide "tell a friend"
    if ($("#tellAFriendBylineBox_feature_div").length > 0) {
        // Hide "tell a friend"
        $("#tellAFriendBylineBox_feature_div").hide();
    }

    // Hide rate Amazon
    if ($(".shoppingCxFeedbackRootWidget").length > 0) {
        // Hide rate Amazon
        $(".shoppingCxFeedbackRootWidget").hide();
    }

    // Block "ad"
    if ($("#hero-quick-promo").length > 0) {
        // Block "ad"
        $("#hero-quick-promo").hide();
    }

    // Block "ad"
    if ($("#ape_Detail_dp-ads-center-promo_Desktop_placement").length > 0) {
        // Block "ad"
        $("#ape_Detail_dp-ads-center-promo_Desktop_placement").hide();
    }

    // Block "ad"
    if ($("#ape_Detail_ad-endcap-1_Glance_placement").length > 0) {
        // Block "ad"
        $("#ape_Detail_ad-endcap-1_Glance_placement").hide();
    }

    // Block "ad"
    if ($("#ape_Detail_customer-reviews-top_Glance_placement").length > 0) {
        // Block "ad"
        $("#ape_Detail_customer-reviews-top_Glance_placement").hide();
    }

    // Block "ad"
    if ($(".rhf-footer").length > 0) {
        // Block "ad"
        $(".rhf-footer").hide();
    }

    // Block "ad"
    if ($("div[id^=CardInstance]").length > 0) {
        // Block "ad"
        $("div[id^=CardInstance]").hide();
    }

    // Block "ad"
    if ($("#percolate-ui-ilm_div").length > 0) {
        // Block "ad"
        $("#percolate-ui-ilm_div").hide();
    }

    // Block "ad"
    if ($("#tell-a-friend").length > 0) {
        // Block "ad"
        $("#tell-a-friend").hide();
    }

    // Hide flyout cart
    if ($("#nav-progressive-subnav").length > 0) {
        // Hide flyout cart
        $("#nav-progressive-subnav").hide();
    }

    // Hide compare products
    if ($("#HLCXComparisonWidget_feature_div").length > 0) {
        // Hide compare products
        $("#HLCXComparisonWidget_feature_div").hide();
    }

    // Block "ad"
    if ($("#rhf").length > 0) {
        // Block "ad"
        $("#rhf").hide();
    }

    // Block audible ad
    if ($("#aud_bottom_row").length > 0) {
        // Block audible ad
        $("#aud_bottom_row").hide();
    }

    // Block audible ad
    if ($("#audible-carousel-container").length > 0) {
        // Block audible ad
        $("#audible-carousel-container").hide();
    }

    // Exit
    return;
}
