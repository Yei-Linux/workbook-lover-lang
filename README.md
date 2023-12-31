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

# Connect EC2 and setup

- Connect to ec2 instance , download gists files and run the shell files to setup:

```console
  ssh -i "~/.ssh/workbook-lover-cluster.pem" ubuntu@ec2-44-215-170-138.compute-1.amazonaws.com

  curl -O https://gist.githubusercontent.com/Yei-Linux/0c7e5e044563af265086786b7cb5553a/raw/faa7f71c5d9736db662fdfa2d8394a96df353471/ec2-setup.sh
  curl -O https://gist.githubusercontent.com/Yei-Linux/89bedf9e27c6cbbfee2311892b8fb49a/raw/89c3bb535de10eeffdefadeb1c8e00320d395014/ec2-docker-install.sh
  curl -O https://gist.githubusercontent.com/Yei-Linux/21f3b61fec844ddb9c926c093bdd0231/raw/ad88bbf65f28569099e9e81f1225091ee80ffe33/ec2-caprover-install.sh
  curl -O https://gist.githubusercontent.com/Yei-Linux/1831bb0742755d26977c4723eea579bc/raw/491c048f689490df13cc0feec2a8eea57599d145/ec2-remove-captain.sh
```


# Caprover

- Password: workbook123