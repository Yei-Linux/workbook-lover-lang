<p align="center">
  <a href="https://www.gamiui.com">
    <img src="https://i.pinimg.com/originals/02/61/18/0261188a351ebd989dd394761403da28.jpg" alt="gamiBrain" width="200"  style="border-radius:50%"/>
    <h1 align="center">Workbook Lover</h1>
  </a>
</p>
</br>

# Resume

- This is a site where you can convert a pdf to audio!

# Setup

- Please run these following commands:

```console
  npm run front:dev
```

# Possible issues

- In case you have docker size issues in your device you can run this following commands to see the memory details and clear it:

```console
  docker system df -v
  docker builder prune -a
```

# Generate our docker builds

- Run these commands:

```console
  npm run docker:build-yt-mixer
  npm run docker:build-transcribe
```

# Generate and push our docker images to ECR

- Setup ecs-cli and gnupg

```console
  npm run aws:deploy-ecr
```

- In case for just login run:

```console
aws ecr-public get-login-password --profile jesus --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws
```
