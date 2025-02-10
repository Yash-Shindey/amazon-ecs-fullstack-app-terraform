const express = require('express');
const AWS = require('aws-sdk');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger');

const app = express();
app.use(cors());
app.use(express.json());

// Configure AWS
AWS.config.update({
  region: 'us-east-1',  // Use your region from terraform
  credentials: new AWS.SharedIniFileCredentials({ profile: 'default' })
});

// Initialize AWS DynamoDB
const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.DYNAMODB_TABLE || 'assets-table-dev-env';

// Health check endpoint
app.get('/status', (req, res) => {
  res.status(200).send('OK');
});

// Get all products (original endpoint)
app.get('/api/getAllProducts', async (req, res) => {
  try {
    const params = {
      TableName: TABLE_NAME
    };
    
    const result = await dynamodb.scan(params).promise();
    res.json({ products: result.Items });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Could not fetch products' });
  }
});

// Get all courses
app.get('/api/courses', async (req, res) => {
  try {
    const params = {
      TableName: TABLE_NAME,
      FilterExpression: '#type = :typeValue',
      ExpressionAttributeNames: {
        '#type': 'type'
      },
      ExpressionAttributeValues: {
        ':typeValue': 'course'
      }
    };
    
    const result = await dynamodb.scan(params).promise();
    console.log('Courses result:', result.Items);  // Debug log
    res.json({ courses: result.Items });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Could not fetch courses' });
  }
});

// Get course by ID
app.get('/api/courses/:id', async (req, res) => {
  try {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: parseInt(req.params.id)  // Changed to parseInt
      }
    };
    
    const result = await dynamodb.get(params).promise();
    console.log('Single course result:', result);  // Debug log
    if (result.Item) {
      res.json(result.Item);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({ error: 'Could not fetch course' });
  }
});

// Get learning resources
app.get('/api/resources', async (req, res) => {
  try {
    const params = {
      TableName: TABLE_NAME,
      FilterExpression: '#type = :typeValue',
      ExpressionAttributeNames: {
        '#type': 'type'
      },
      ExpressionAttributeValues: {
        ':typeValue': 'resource'
      }
    };
    
    const result = await dynamodb.scan(params).promise();
    res.json({ resources: result.Items });
  } catch (error) {
    console.error('Error fetching resources:', error);
    res.status(500).json({ error: 'Could not fetch resources' });
  }
});

// Test endpoint to verify DynamoDB connection
app.get('/api/test-db', async (req, res) => {
  try {
    const params = {
      TableName: TABLE_NAME,
      Limit: 1
    };
    
    const result = await dynamodb.scan(params).promise();
    res.json({
      message: 'DynamoDB connection successful',
      tableContents: result.Items,
      tableName: TABLE_NAME
    });
  } catch (error) {
    console.error('Database test error:', error);
    res.status(500).json({
      error: 'Database connection failed',
      details: error.message,
      tableName: TABLE_NAME
    });
  }
});

// Configure Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`DynamoDB Table: ${TABLE_NAME}`);
});

module.exports = app;
