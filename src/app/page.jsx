import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import MainModalPopups from "@/components/MainModalPopups/MainModalPopups"
import MainPageBannerImage from "@/components/MainPageBannerImage/MainPageBannerImage"
import Category from "@/components/category/Category"
import Products from "@/components/Products/Products"

export default function Home() {
  return (
    <>

      <Navbar />
      {/* <MainModalPopups /> */}
      <MainPageBannerImage />
      <Category />
      <Products />

      <Footer />
    </>
  )
}
