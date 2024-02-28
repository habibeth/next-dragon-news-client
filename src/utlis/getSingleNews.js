

const getSingleNews = async(id) => {
    const res = await fetch(`http://localhost:5000/news/${id}`);
    return res.json();
};

export default getSingleNews;