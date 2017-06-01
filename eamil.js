var nodemailer = require('nodemailer');
var config_email = {
    host: 'smtp.163.com',
    post: 25, // SMTP 端口
    //secureConnection: true, // 使用 SSL
    auth: {
        user: 'wangweifengyx@163.com',
        //这里密码不是qq密码，是你设置的smtp密码
        pass: '********'
    }
};

var transporter = nodemailer.createTransport(config_email);

var data = {
    from: 'wangweifengyx@163.com', // 发件地址
    to: '980090631@qq.com', // 收件列表
    subject: 'Hello feng', // 标题

    text: 'Hello world feng' // 标题 //text和html两者只支持一种
    //html: '<b>Hello world ?</b>' // html 内容
};

transporter.sendMail(data, function(err, info) {
    if (err) {
        return console.log(err);
    }
    console.log('Message sent: ' + info.response);

});