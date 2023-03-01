import { Box, Stack, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { fetchPosts } from "../features/postsSlice";
import { IPost, IPosts } from "../types/types";
import Post from "./Post";
import Posts from "./Posts";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch<AppDispatch>()
  const posts: IPosts = useSelector((state: RootState)=> state.postsSlice.posts)
  const postsStatus = useSelector((state: RootState)=> state.postsSlice.status)
  const postsError = useSelector((state: RootState)=> state.postsSlice.error)

  useEffect(()=>{
    if(postsStatus === 'idle')dispatch(fetchPosts())
  },[])
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {postsStatus === 'loading' ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
          <Skeleton variant="rectangular" height={300} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
        {postsStatus === 'succeeded' ? <Posts/> : null }
          
        </>
      )}
    </Box>
  );
};

export default Feed;