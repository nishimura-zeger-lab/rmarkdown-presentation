// Usage: ![:image 70%, left](figure.png)
remark.macros.image = function (percentage = '100%', alignment = 'center') {
  var url = this;
  return '<img src="' + url + '" class="' + alignment + '" style="width: ' + percentage + '" />';
};

// Usage: ![:vspace 1ex]
remark.macros.vspace = function (height) {
  var url = this;
  return '<p style="margin-top: ' + height + ';"> </p>';
};

remark.macros.highlight = function (str, color = 'red') {
  var url = this;
  if (color == 'blue') {
    hex = '#0ca697'; // Luminance-adjusted version of the complementary
  } else {
    hex = '#ce0f22';
  }
  return '<span style="color:' + hex + ';">' + str + '</span>';
};
