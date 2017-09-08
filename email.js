const nodemailer = require('nodemailer');
const schedule = require("node-schedule");
const config_email = {
    host: 'smtp.163.com',
    post: 25, // SMTP 端口
    //secureConnection: true, // 使用 SSL
    auth: {
        user: 'wangweifengyx@163.com',
        //这里密码不是qq密码，是你设置的smtp密码
        pass: '********'
    }
};

const transporter = nodemailer.createTransport(config_email);

const data = {
    from: 'wangweifengyx@163.com', // 发件地址
    to: '980090631@qq.com', // 收件列表
    subject: 'Hello feng', // 标题

    text: 'Hello world feng' // 标题 //text和html两者只支持一种
    //html: '<b>Hello world ?</b>' // html 内容
};

transporter.sendMail(data, (err, info) => {
    if (err) {
        return console.log(err);
    }
    console.log('Message sent: ' + info.response);

});

let start =  () => {
    console.log("start");
}

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(1, 6)];
rule.hour =14;
rule.minute =9;
let j = schedule.scheduleJob(rule, () => {
    start();
});