// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here
    $w('#button1').onClick( () => {
        $w('#text3').text = 'Hello from Velo!';
    } );
    // To select an element by ID use: $w('#elementID')
    // Click 'Preview' to run your code
});
