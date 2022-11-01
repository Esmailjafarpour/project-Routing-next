import styleEventItem from './event-item.module.css';
import Button from '../ui/button.js';
import DateIcon from '../icons/date-icon.js';
import ArrowRightIcon from '../icons/arrow-right-icon.js';
import AddressIcon from '../icons/address-icon.js';

function EventItem(props) {

    const {title,image,date,location,id} = props ;

    const humaneReadableDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })

    const formatedAddress = location.replace(",","\n");

    const exploreLink = `/events/${id}`;


    return(  
        <li className={styleEventItem.item}>
            <img src={"/" + image} alt={title}/>
            <div className={styleEventItem.content}>
                <div className={styleEventItem.summary}>
                    <h2>{title}</h2>
                    <div className={styleEventItem.date}>
                        <DateIcon/>
                        <time>{humaneReadableDate}</time>
                    </div>
                    <div className={styleEventItem.address}>
                        <AddressIcon/>
                        <address>{formatedAddress}</address>
                    </div>
                </div>
                <div className={styleEventItem.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={styleEventItem.icon}><ArrowRightIcon/></span>
                        
                    </Button>                    
                </div>
            </div>
           
        </li>
    )
}

export default EventItem;