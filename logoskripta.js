var SVGIcons = { 
            "chanel.svg": {
                draw: function(ctx) {
                    ctx.save();
                    ctx.strokeStyle = "rgba(0,0,0,0)";
                    ctx.fillStyle = "#000000";
                    ctx.font = "15px ''";
                    ctx.scale(4.1, 4.1);

                    // Start drawing the icon
                    ctx.beginPath();
                    ctx.moveTo(6.07202, 3.17291);
                    ctx.bezierCurveTo(4.32617, 3.5202, 2.72253, 4.37738, 1.46387, 5.63605);
                    ctx.lineTo(3.59357, 7.76575);
                    ctx.bezierCurveTo(4.43103, 6.92835, 5.49805, 6.35803, 6.65961, 6.12695);
                    ctx.bezierCurveTo(7.53589, 5.95264, 8.43628, 5.9773, 9.29547, 6.19452);
                    ctx.bezierCurveTo(9.07935, 6.45056, 8.87695, 6.71936, 8.68951, 6.99988);
                    ctx.bezierCurveTo(7.70056, 8.47992, 7.17273, 10.22, 7.17273, 12);
                    ctx.bezierCurveTo(7.17273, 13.78, 7.70056, 15.5201, 8.68951, 17.0001);
                    ctx.bezierCurveTo(8.87695, 17.2806, 9.07941, 17.5494, 9.29553, 17.8055);
                    ctx.bezierCurveTo(8.43634, 18.0227, 7.53589, 18.0474, 6.65961, 17.873);
                    ctx.bezierCurveTo(5.49805, 17.642, 4.43103, 17.0717, 3.59357, 16.2343);
                    ctx.lineTo(1.46387, 18.364);
                    ctx.bezierCurveTo(2.72253, 19.6226, 4.32617, 20.4798, 6.07202, 20.8271);
                    ctx.bezierCurveTo(7.81781, 21.1743, 9.62744, 20.9961, 11.272, 20.3149);
                    ctx.bezierCurveTo(11.5204, 20.212, 11.7634, 20.0983, 12.0003, 19.9744);
                    ctx.bezierCurveTo(12.2372, 20.0983, 12.4802, 20.212, 12.7286, 20.3149);
                    ctx.bezierCurveTo(14.3731, 20.9961, 16.1827, 21.1743, 17.9285, 20.8271);
                    ctx.bezierCurveTo(19.6744, 20.4798, 21.278, 19.6226, 22.5367, 18.364);
                    ctx.lineTo(20.407, 16.2343);
                    ctx.bezierCurveTo(19.5695, 17.0717, 18.5025, 17.642, 17.3409, 17.873);
                    ctx.bezierCurveTo(16.4647, 18.0474, 15.5642, 18.0227, 14.705, 17.8055);
                    ctx.bezierCurveTo(14.9211, 17.5494, 15.1236, 17.2806, 15.311, 17.0001);
                    ctx.bezierCurveTo(16.3, 15.5201, 16.8278, 13.78, 16.8278, 12);
                    ctx.bezierCurveTo(16.8278, 10.22, 16.3, 8.47992, 15.311, 6.99988);
                    ctx.bezierCurveTo(15.1236, 6.71936, 14.9212, 6.45056, 14.7051, 6.19452);
                    ctx.bezierCurveTo(15.5643, 5.9773, 16.4647, 5.95264, 17.3409, 6.12695);
                    ctx.bezierCurveTo(18.5025, 6.35803, 19.5695, 6.92835, 20.407, 7.76575);
                    ctx.lineTo(22.5367, 5.63605);
                    ctx.bezierCurveTo(21.278, 4.37738, 19.6744, 3.5202, 17.9285, 3.17291);
                    ctx.bezierCurveTo(16.1827, 2.82568, 14.3731, 3.00391, 12.7286, 3.68506);
                    ctx.bezierCurveTo(12.4802, 3.78796, 12.2372, 3.90167, 12.0003, 4.02564);
                    ctx.bezierCurveTo(11.7634, 3.90167, 11.5204, 3.78796, 11.272, 3.68506);
                    ctx.bezierCurveTo(9.62744, 3.00391, 7.81781, 2.82568, 6.07202, 3.17291);
                    ctx.closePath();

                    // Inner circle
                    ctx.moveTo(12.0003, 7.7049);
                    ctx.bezierCurveTo(11.6996, 7.99695, 11.429, 8.32117, 11.1938, 8.67316);
                    ctx.bezierCurveTo(10.5358, 9.6579, 10.1846, 10.8157, 10.1846, 12);
                    ctx.bezierCurveTo(10.1846, 13.1843, 10.5358, 14.3421, 11.1938, 15.3268);
                    ctx.bezierCurveTo(11.429, 15.6788, 11.6996, 16.0031, 12.0003, 16.2951);
                    ctx.bezierCurveTo(12.301, 16.0031, 12.5715, 15.6788, 12.8068, 15.3268);
                    ctx.bezierCurveTo(13.4647, 14.3421, 13.8159, 13.1843, 13.8159, 12);
                    ctx.bezierCurveTo(13.8159, 10.8157, 13.4647, 9.6579, 12.8068, 8.67316);
                    ctx.bezierCurveTo(12.5715, 8.32117, 12.301, 7.99695, 12.0003, 7.7049);
                    ctx.closePath();

                    ctx.fill("evenodd");
                    ctx.stroke();
                    ctx.restore();
                }
            }
        };

        // Get canvas context
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        // Register and draw the icon
        for (var name in SVGIcons) {
            SVGIcons[name].draw(ctx);
        }