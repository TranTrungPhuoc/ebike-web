export function Network() {
    const array = [
        {
            'title': 'Tìm đường',
            'link': 'https://www.google.com/maps/place/TH%E1%BB%A2+R%E1%BA%BA/@10.7732566,106.6009589,17z/data=!3m1!4b1!4m6!3m5!1s0x69ca058d1e9b593b:0xe944f27cf9951078!8m2!3d10.7732514!4d106.6055723!16s%2Fg%2F11tp9wxyv8?entry=ttu',
            'icon': 'map',
            'type': 0
        },
        {
            'title': 'Chat Zalo',
            'link': 'https://zalo.me/02862539118',
            'icon': 'zalo',
            'type': 0
        },
        {
            'title': 'Gọi điện',
            'link': '02862539118',
            'icon': 'phone',
            'type': 1
        },
        {
            'title': 'Messenger',
            'link': 'https://www.messenger.com/t/smarthomesheel',
            'icon': 'messenger',
            'type': 0
        },
        {
            'title': 'Nhắn tin SMS',
            'link': 'sms:02862539118',
            'icon': 'sms',
            'type': 0
        },
    ]
    let str = '';
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element['type'] == 0){
            str += '<li><a href="'+element['link']+'">';
            str += '<i class="'+element['icon']+'"></i>'+element['title'];
            str += '</a></li>';
        }
        else{
            str += '<li><a href="'+element['link']+'">';
            str += '<span class="phone_animation animation-shadow"><i class="'+element['icon']+'"></i></span>';
            str += '<span class="btn_phone_txt">'+element['title']+'</span>';
            str += '</a></li>';
        }
    }
    return (
        <div className="network-nav block md:hidden">
            <ul dangerouslySetInnerHTML={{ __html: str }}></ul>
        </div>
    )
}