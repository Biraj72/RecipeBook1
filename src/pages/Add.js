import React from 'react';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import Form from '../components/Form';

const Add = () => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              Add Recipe
            </Typography>
            <Form />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Add;