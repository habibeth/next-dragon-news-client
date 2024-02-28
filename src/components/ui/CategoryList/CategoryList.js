import { getAllCategories } from "@/utlis/getAllCategories";
import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
  const { data: categories } = await getAllCategories();
  // console.log(categories);
  return (
    <Box className="mt-5 bg-gray-100 px-5 py-2">
      <Typography variant="h6" className="py-2">Categories</Typography>
      <Divider />

      <Stack rowGap={1} sx={{ mt: 2.5 }}>
        {
          categories.map(category => (
            <Button variant="outlined" key={category._id}>
              <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
            </Button>
          ))
        }
      </Stack>

    </Box>
  );
};

export default CategoryList;
