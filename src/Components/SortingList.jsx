import {Badge} from '@mantine/core'
import { Queries } from '../CommonQuery'

const SortingList = () => {
    return(
        <div>
            <section className='sorting-badges'>
                {Queries && Queries.map((ele, i) => {
                   return <Badge size='xl'radius='md' key={i}>{ele}</Badge>
                })}
            </section>

        </div>
    )
}

export {SortingList}
