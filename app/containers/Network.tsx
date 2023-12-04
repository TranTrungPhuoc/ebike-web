export function Network() {
    const array = [
        {
            'title': 'Tìm đường',
            'link': 'https://www.google.com/maps/place/TH%E1%BB%A2+R%E1%BA%BA/@10.7732566,106.6009589,17z/data=!3m1!4b1!4m6!3m5!1s0x69ca058d1e9b593b:0xe944f27cf9951078!8m2!3d10.7732514!4d106.6055723!16s%2Fg%2F11tp9wxyv8?entry=ttu',
            'icon': 'map.png',
            'type': 0
        },
        {
            'title': 'Chat Zalo',
            'link': 'https://zalo.me/02862539118',
            'icon': 'zalo.png',
            'type': 0
        },
        {
            'title': 'Gọi điện',
            'link': '02862539118',
            'icon': 'phone.png',
            'type': 1
        },
        {
            'title': 'Messenger',
            'link': 'https://www.messenger.com/t/smarthomesheel',
            'icon': 'messenger.png',
            'type': 0
        },
        {
            'title': 'Gửi SMS',
            'link': 'sms:02862539118',
            'icon': 'sms.png',
            'type': 0
        },
    ]
    let str = '';
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element['type'] == 0){
            str += '<li><a href="'+element['link']+'">';
            str += '<img src="/'+element['icon']+'" /><span>'+element['title']+'</span>';
            str += '</a></li>';
        }
        else{
            str += '<li class="call"><a href="'+element['link']+'">';
            str += '<span class="phone_animation animation-shadow"><img src="/'+element['icon']+'" /></span>';
            str += '<span class="btn_phone_txt">'+element['title']+'</span>';
            str += '</a></li>';
        }
    }
    return (
        <div className="network-nav block">
            <ul dangerouslySetInnerHTML={{ __html: str }} className="text-[#6fa400]"></ul>
        </div>
    )
}