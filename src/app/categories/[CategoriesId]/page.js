import getCategoryNews from "@/utlis/getCategoryNews";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


const CategoriesId = async ({ params, searchParams }) => {
    // console.log(params.CategoriesId)
    const { data: items } = await getCategoryNews(searchParams.category);
    // console.log(data)
    return (
        <Box className="my-5">
            <h2>Total <span className="font-bold capitalize">{searchParams.category}</span> News: {items.length}</h2>
            <Grid container spacing={2} className="my-5">
                {
                    items.map(item => <Grid key={item._id} item xs={6}>
                        <Link href={`/${item.category.toLowerCase()}/${item._id}`}>
                            <Card>
                                <CardMedia sx={{
                                    "& img": {
                                        width: "100%",
                                        height: "250px"
                                    }
                                }}>
                                    <Image src={item.image_url} width={800} height={100} alt="top news" />
                                </CardMedia>
                                <CardContent>
                                    <div className="my-5">
                                        <span className="px-4 py-2 bg-red-500 rounded-lg text-white">
                                            {item.category}
                                        </span>
                                    </div>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {item.title.length > 30 ? item.title.slice(0, 30) + "...." : item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        By {item.author.name} - {item.author.published_date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.details.length > 200 ? item.details.slice(0, 200) + "...." : item.details}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default CategoriesId;