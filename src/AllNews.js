import React , {useEffect , useState} from "react";
import Sarbarg from "./components/Sarbarg/Sarbarg";
import Layout from "./Layout/Layout";
// import NewsSelect from "./components/NewsSelect/NewsSelect";
// import Pagination from "./components/Pagination/Pagination";
import axios from "axios";
import NewsLine from "./components/NewsLine/NewsLine";
import ImportNews from "./components/ImportantNews/ImportNews";
import "./AllNews.css"
import { Link } from "react-router-dom";
const AllNews = (props) => {
    const [currentPage, setCurrentPage] = useState(1);

    // const currentTableData = useMemo(() => {
    //   const firstPageIndex = (currentPage - 1) * PageSize;
    //   const lastPageIndex = firstPageIndex + PageSize;
    //   return data.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage]);
    const [importNews , setImportNews] = useState([])
    const [newsPage , setNewsPage] = useState(null)
    const [pageCount , setPageCount] = useState(5)
    const [newsInfo , setNewsInfo] = useState([])
    useEffect(() => {
        const apiUrl = 'https://backendtest.ecommerce.gov.ir/news_api/news/?type=ne';
        const token = '13f34a15e523785deece406a856834068c3d1add';
        axios.get(apiUrl, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
        .then(response => {
               setImportNews(response.data.results.slice(0, 3))
               console.log(response.data.results.slice(0, 3))
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, [])

    const getNews = async (pageNumber = 1) => {
        const apiUrl = `https://backendtest.ecommerce.gov.ir/news_api/news?page=${pageNumber}`;
        const token = '13f34a15e523785deece406a856834068c3d1add';
        await axios.get(apiUrl, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
        .then(response => {
            setPageCount(Math.round(Number(response.data.count) / 5)) 
            setNewsInfo(response.data.results)

        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        getNews();
    }, [])
    return(
        <Layout>
            <Sarbarg sarbargTitle={"اخبار و اطلاعیه ها"}/>
            <div className="all__news__container">
                <section className="all__news__right">
                         {newsInfo.map((item)=>{
                            return (<NewsLine 
                                        NewsLineImage={item.main_image?.thumbnail}
                                        NewsLineTitle={item.kicker}
                                        NewsLineMode={item.type}
                                        NewsLineSubTitle={item.headline}
                                        NewsLineDate={item.date_created}
                                        NewsLineTime={item.date_published}
                                        id={item.id}
                                    />
                            )
                         })}
                         <div className="all__line__page__container">
                            {Array.apply(null, {length: pageCount}).map((item, i)=>{
                                return(
                                    <span className="pagination__number" onClick={()=> getNews(i+1)}>{i+1}</span>
                                )
                            })}
                            {/* <Pagination 
                                    className="pagination-bar"
                                    currentPage={currentPage}
                                    totalCount={data.length}
                                    pageSize={PageSize}
                                    onPageChange={page => setCurrentPage(page)}/> */}
                         </div>
                </section>
                <section className="all__news__left">
                    <div className="all__news__left__title__container">
                        <h1 className="all__news__left__title">مهم ترین اخبار</h1>
                    </div>
                    <div className="all__news__left__import__container">
                        {importNews.map((item)=>{
                            return(<ImportNews 
                                importImage={item.main_image?.thumbnail} 
                                importTitle={item.headline} 
                                importDate={item.date_published}
                                id={item.id}
                            />)
                        })}
                    </div>
                </section>
            </div>
        </Layout>
    );
}
export default AllNews;