import React from 'react'
import JobCard from 'components/JobCard'
import Header from 'components/Header'

function jobs(props) {

    console.log(props)
    const jobData = JSON.parse(props.items)
    console.log(jobData)
    const [dataItems, setDataItems] = React.useState(jobData)


    return (
        <>
            <Header />
            <main className='md:container w-full mx-auto h-screen mt-0'>
                <div className=" w-3/8 border p-8 h-full grid content-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-gray-50 ">
                    {
                        dataItems.map((item, id) => {
                            return <JobCard item={item} key={id} />
                        })
                    }
                </div>
            </main>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://sheetdb.io/api/v1/7kt23o5lou5at`)
    const data = await res.json()
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            items: JSON.stringify(data)
        } // will be passed to the page component as props
    }
}

export default jobs