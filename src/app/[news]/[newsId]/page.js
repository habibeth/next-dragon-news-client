import getSingleNews from "@/utlis/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";


const SingleNews = async ({ params }) => {
    const { data: news } = await getSingleNews(params.newsId);
    // console.log(data);
    return (
        <Box className="my-10">
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Image src={news.thumbnail_url} width={800} height={500} alt="category image" />
                        <Grid container spacing={2} className="my-5">
                            <Grid item lg={6}>
                                <Image src={news.thumbnail_url} width={800} height={500} alt="category image" />
                            </Grid>
                            <Grid item lg={6}>
                                <Image src={news.thumbnail_url} width={800} height={500} alt="category image" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <Typography variant="h5" component="h2">{news.title}</Typography>
                        <Box className="flex gap-5 items-center mt-5">
                            <Avatar alt="author" src={news.author.img} />
                            <Typography variant="h6" component="h2">By {news.author.name}</Typography>
                            <Typography variant="h6" component="h2">- {news.author.published_date}</Typography>
                        </Box>
                        <Typography className="text-justify whitespace-pre-line my-5 text-gray-600">{news.details}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SingleNews;