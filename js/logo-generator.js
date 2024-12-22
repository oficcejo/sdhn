function generateLogo() {
    const canvas = document.createElement('canvas');
    canvas.width = 320;  // 2倍大小以支持高清屏
    canvas.height = 80;
    canvas.style.width = '160px';
    canvas.style.height = '40px';
    
    const ctx = canvas.getContext('2d');
    
    // 创建彩虹渐变背景
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, 'rgba(255, 0, 0, 0.1)');     // 红
    gradient.addColorStop(0.2, 'rgba(255, 165, 0, 0.1)'); // 橙
    gradient.addColorStop(0.4, 'rgba(255, 255, 0, 0.1)'); // 黄
    gradient.addColorStop(0.6, 'rgba(0, 255, 0, 0.1)');   // 绿
    gradient.addColorStop(0.8, 'rgba(0, 0, 255, 0.1)');   // 蓝
    gradient.addColorStop(1, 'rgba(148, 0, 211, 0.1)');   // 紫
    
    // 填充彩虹背景
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 添加圆角矩形白色背景
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    roundRect(ctx, 5, 5, canvas.width-10, canvas.height-10, 10);
    
    // 设置文字样式
    ctx.fillStyle = '#0066cc';  // 使用主题蓝色
    ctx.font = 'bold 24px "Microsoft YaHei"';  // 减小字体大小
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';   // 文字居中
    
    // 绘制文字
    const text = '山东汇能工程咨询有限公司';
    ctx.fillText(text, canvas.width/2, canvas.height/2);
    
    // 将 canvas 转换为图片
    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
        logoImg.src = canvas.toDataURL('image/png');
        logoImg.alt = '山东汇能工程咨询有限公司';
    }
}

// 辅助函数：绘制圆角矩形
function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
}

// 页面加载完成后生成 logo
document.addEventListener('DOMContentLoaded', generateLogo); 