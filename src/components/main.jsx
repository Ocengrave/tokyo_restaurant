import s_main from './main.module.css';
// пропсы для элементов меню
const Menu_items = (props) =>
{
    return (
        props.items
    );
}
// менюшка
const Menu = () =>
{
    return (
        <div className={s_main.menu}>
              
            <div className={s_main.items}>
               <Menu_items items="MENU"/>
            </div>
            <div className={s_main.items}>
                <Menu_items items="GAMES"/>
            </div>
            <div className={s_main.items}>
                <Menu_items items="STORE"/>
            </div>
            <div className={s_main.items}>
                <Menu_items items="NEWS"/>
            </div>
            <div className={s_main.items}>
                <Menu_items items="JOBS"/>
            </div>
            <div className={s_main.items}>
                <Menu_items items="FORUM"/>
            </div>
            <div className={s_main.items}>
             <Menu_items items="SUPPORT"/>
            </div>
         
        </div>
    );  
}
//шапка сайта
const Header = () =>
{
    return (
        <div className={s_main.header}>
            
            <div className={s_main.header_logo}>
            <div className={s_main.mobile_items}>
                <img src="https://glavbukh.kz/public/site/images/manu.png" alt="" srcset=""/>
            </div>
            <div className={s_main.main_logo}>
                <img src="https://www.ukai.co.jp/shiba/common/img/shi_com_logo02.png" alt="" srcset=""/>
            </div>
            </div>
            <Menu/>
        </div>
    );  
}

// весь основной контент
const Main = () =>
{
    return (
        <div className={s_main.container}>
            
                <Header/>
        </div>
    );  
}
export default Main;