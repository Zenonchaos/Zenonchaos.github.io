$('#indicatorContainer').radialIndicator({
        barColor: '#87CEEB',
        barWidth: 7,
        initValue: 0,
        roundCorner : true,
        percentage: true,
        displayNumber: false,
        value : 20,
        radius: 150,
        frameTime: 500,
        barColor: {
        0: '#FF0000',
        33: '#FFFF00',
        66: '#0066FF',
        100: '#33CC33'
    },
    percentage: true
    });

var radialObj = $('#indicatorContainer').data('radialIndicator');
//now you can use instance to call different method on the radial progress.
//like
radialObj.animate(100);