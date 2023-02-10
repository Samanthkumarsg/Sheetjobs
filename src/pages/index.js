import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import JobCard from 'components/JobCard'
import Header from 'components/Header'
import { google } from 'googleapis'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home(items) {
  const jobData = JSON.parse(items.items)
  console.log(jobData)
  const [dataItems, setDataItems] = React.useState(jobData)

  return (
    <>
      <Head>
        <title>Find jobs Easy </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Nunito:wght@200;300;400;500;600;700&family=Poppins:wght@100;300;400;500;600;700&display=swap" />
      </Head>
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


export const getServerSideProps = async () => {

  const auth = await google.auth.getClient({
    keyFilename: './secrets.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })

  const sheets = google.sheets({
    version: 'v4',
    auth
  })

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet1"
  })


  const [Name, ...items] = response.data.values

  const data = items.map((row) => {
    const obj = {}
    row.forEach((field, id) => obj[Name[id]] = field)
    return obj
  })

  return {
    props: {
      items: JSON.stringify(data)
    }
  }

}
