provider "aws" {
  region     = "us-west-2"
}

resource "aws_instance" "web_server" {
	count 		= 1
	ami        	= "ami-07583b15e91978cab"
	instance_type 	= "t2.micro"
	security_groups	= ["beachify_sg"]
	key_name	= "machi"
	tags = {Usage = "beachify"}
}

resource "aws_security_group" "beachify_sg" {
  name        = "beachify_sg"
  description = "Allow HTTP, HTTPS, MySQL & SSH traffic"
  
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks     = ["0.0.0.0/0"]
  }
  
  ingress {
    from_port   = 80
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks     = ["0.0.0.0/0"]
  }

  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }
}
