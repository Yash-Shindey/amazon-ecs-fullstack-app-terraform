
## Prerequisites
There are general steps that you must follow in order to launch the infrastructure resources.

Before launching the solution please follow the next steps:

1) Install Terraform, use Terraform v0.13 or above. You can visit [this](https://releases.hashicorp.com/terraform/) Terraform official webpage to download it.
2) Configure the AWS credentials into your machine (~/.aws/credentials). You need to use the following format:

```shell
    [AWS_PROFILE_NAME]
    aws_access_key_id = Replace_with_the_correct_access_Key
    aws_secret_access_key = Replace_with_the_correct_secret_Key
```

3) Generate a GitHub token. You can follow [this](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) steps to generate it.

## Usage

**1.** Fork this repository and create the GitHub token granting access to this new repository in your account.

**2.** Clone that recently forked repository from your account (not the one from the aws-sample organization) and change the directory to the appropriate one as shown below:

```bash
cd Infrastructure/
```

**3.** Run Terraform init to download the providers and install the modules

```shell
terraform init 
```
**4.** Run the terraform plan command, feel free to use a tfvars file to specify the variables.
You need to set at least the following variables:
+ **aws_profile** = according to the profiles name in ~/.aws/credentials
+ **aws_region** = the AWS region in which you want to create the resources
+ **environment_name** = a unique name used for concatenation to give place to the resources names
+ **github_token** = your GitHub token, the one generated a few steps above
+ **repository_name** = your GitHub repository name
+ **repository_owner** = the owner of the GitHub repository used

```shell
terraform plan -var aws_profile="your-profile" -var aws_region="your-region" -var environment_name="your-env" -var github_token="your-personal-token" -var repository_name="your-github-repository" -var repository_owner="the-github-repository-owner"
```

Example of the previous command with replaced dummy values:

```shell
terraform plan -var aws_profile="development" -var aws_region="eu-central-1" -var environment_name="developmentenv" -var github_token="your-personal-token" -var repository_name="your-github-repository" -var repository_owner="the-github-repository-owner"
```
 
**5.** Review the terraform plan, take a look at the changes that terraform will execute:

```shell
terraform apply -var aws_profile="your-profile" -var aws_region="your-region" -var environment_name="your-env" -var github_token="your-personal-token" -var repository_name="your-github-repository" -var repository_owner="the-github-repository-owner"
```

**6.** Once Terraform finishes the deployment, open the AWS Management Console and go to the AWS CodePipeline service. You will see that the pipeline, which was created by this Terraform code, is in progress. Add some files and DynamoDB items as mentioned [here](#client-considerations-due-to-demo-proposals). Once the pipeline finished successfully and the before assets were added, go back to the console where Terraform was executed, copy the *application_url* value from the output and open it in a browser.

**7.** In order to access the also implemented Swagger endpoint, copy the *swagger_endpoint* value from the Terraform output and open it in a browser.

## Autoscaling test

To test how your application will perform under a peak of traffic, a stress test configuration file is provided.

For this stress test [Artillery](https://artillery.io/) is being used. Please be sure to install it following [these](https://artillery.io/docs/guides/getting-started/installing-artillery.html) steps.

Once installed, please change the ALB DNS to the desired layer to test (front/backend) in the **target** attribute, which you can copy from the generated Terraform output, or you can also search it in the AWS Management Console.

To execute it, run the following commands:

*Frontend layer:*
```bash
artillery run Code/client/src/tests/stresstests/stress_client.yml
```

*Backend layer:*
```bash
artillery run Code/server/src/tests/stresstests/stress_server.yml
```

To learn more about Amazon ECS Autoscaling, please take a look to [this](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html) documentation.
## Application Code

### Client app

The Client folder contains the code to run the frontend. This code is written in Vue.js and uses the port 80 in the deployed version, but when run localy it uses port 3000.

The application folder structure is separeted in components, views and services, despite the router and the assets.

### Client considerations due to demo proposals
1) The assets used by the client application are going to be requested from the S3 bucket created with this code. Please add 3 images to the created S3 bucket.

2) The DynamoDB structure used by the client application is the following one:

```shell
  - id: N (HASH)
  - path: S
  - title: S
```
Feel free to change the structure as needed. But in order to have full demo experience, please add 3 DynamoDB Items with the specified structure from above. Below is an example.

*Note: The path attribute correspondes to the S3 Object URL of each added asset from the previous step.*

Example of a DynamoDB Item:

```json
{
  "id": {
    "N": "1"
  },
  "path": {
    "S": "https://mybucket.s3.eu-central-1.amazonaws.com/MyImage.jpeg"
  },
  "title": {
    "S": "My title"
  }
}
```

### Server app

The Server folder contains the code to run the backend. This code is written in Node.js and uses the port 80 in the deployed version, but when run localy it uses port 3001.

Swagger was also implemented in order to document the APIs. The Swagger endpoint is provided as part of the Terraform output, you can grab the output link and access it through a browser.

The server exposes 3 endpoints:
- /status: serves as a dummy endpoint to know if the server is up and running. This one is used as the health check endpoint by the AWS ECS resources
- /api/getAllProducts: main endpoint, which returns all the Items from an AWS DynamoDB table
- /api/docs: the Swagger endpoint for the API documentation

## Cleanup

Run the following command if you want to delete all the resources created before:

```shell
terraform destroy -var aws_profile="your-profile" -var AWS_REGION="your-region" -var environment_name="your-env" -var github_token="your-personal-token" -var repository_name="your-github-repository" - var repository_owner="the-github-repository-owner"
```

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License
This library is licensed under the MIT-0 License. See the [LICENSE](LICENSE) file.
