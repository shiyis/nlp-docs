(function($) {
    var toTop = ($('#sidebar').height() - $(window).height()) + 60;

    // Caption
    $('.article-entry').each(function(i) {
        $(this).find('img').each(function() {
            if (this.alt && !(!!$.prototype.justifiedGallery && $(this).parent('.justified-gallery').length)) {
                $(this).after('<span class="caption">' + this.alt + '</span>');
            }

            // For images not already wrapped in a link, apply lightGallery
            if ($(this).parent().prop("tagName") !== 'A') {
                $(this).wrap('<a href="' + this.src + '" title="' + this.alt + '" class="gallery-item"></a>');
            }
        });
    });

    if (typeof lightGallery !== 'undefined') {
        var options = {
            selector: '.gallery-item',
        };
        $('.article-entry').each(function(i, entry) {
            lightGallery(entry, options);
        });
        lightGallery($('.article-gallery')[0], options);
    }

    if (!!$.prototype.justifiedGallery) {
        var options = {
            rowHeight: 140,
            margins: 4,
            lastRow: 'justify'
        };
        $('.justified-gallery').justifiedGallery(options);
    }

    // Profile card
    $(document).on('click', function () {
        $('#profile').removeClass('card');
    }).on('click', '#profile-anchor', function (e) {
        e.stopPropagation();
        $('#profile').toggleClass('card');
    }).on('click', '.profile-inner', function (e) {
        e.stopPropagation();
    });

    // To Top
    if ($('#sidebar').length) {
        $(document).on('scroll', function () {
            if ($(document).width() >= 800) {
                if(($(this).scrollTop() > toTop) && ($(this).scrollTop() > 0)) {
                    $('#toTop').fadeIn();
                    $('#toTop').css('left', $('#sidebar').offset().left);
                } else {
                    $('#toTop').fadeOut();
                }
            } else {
                $('#toTop').fadeOut();
            }
        }).on('click', '#toTop', function () {
            $('body, html').animate({ scrollTop: 0 }, 600);
        });
    }

    // Expand all categories on page load
    $(document).ready(function() {
        $('#allExpand').click();
    });

    // Task lists in markdown
    $('.article-entry ul > li').each(function() {
        var taskList = {
            field: this.textContent.substring(0, 2),
            check: function(str) {
                var re = new RegExp(str);
                return this.field.match(re);
            }
        }
        var string = [/\[ \]/, [/\[x\]/, "checked"]];
        var checked = taskList.check(string[1][0]);
        var unchecked = taskList.check(string[0]);
        var $current = $(this);
        function update(str, check) {
            var click = ["disabled", ""];
            $current.html($current.html().replace(
              str, "<input type='checkbox' " + check + " " + click[1] + " >")
            )
        }
        if (checked || unchecked) {
            this.classList.add("task-list");
            if (checked) {
                update(string[1][0], string[1][1]);
                this.classList.add("check");
            } else {
                update(string[0], "");
            }
        }
    });

    // Hide .timeline-icon when .timeline-post-title a is clicked
    $(document).on('click', '.timeline-post-title a', function(event) {
        var timelineRow = $(this).closest('.timeline-row');
        var timelineIcon = timelineRow.find('.timeline-icon');

        if (timelineIcon.length) {
            timelineIcon.css('display', 'none');

            // Save the state using localStorage
            var clickedLinks = JSON.parse(localStorage.getItem('clickedLinks')) || [];
            clickedLinks.push($(this).attr('href'));
            localStorage.setItem('clickedLinks', JSON.stringify(clickedLinks));
        }
    });

    // On page load, check localStorage and hide icons for previously clicked links
    $(document).ready(function() {
        var clickedLinks = JSON.parse(localStorage.getItem('clickedLinks')) || [];
        clickedLinks.forEach(function(link) {
            var anchor = $('.timeline-post-title a[href="' + link + '"]');
            if (anchor.length) {
                var timelineIcon = anchor.closest('.timeline-row').find('.timeline-icon');
                if (timelineIcon.length) {
                    timelineIcon.css('display', 'none');
                }
            }
        });
    });

})(jQuery);
