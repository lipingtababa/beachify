provider "aws" {
  region     = "us-west-2"
}

resource "aws_instance" "vpn" {
	count 		= 1
	ami        	= "ami-07583b15e91978cab"
	instance_type 	= "t2.micro"
	security_groups	= ["shadowsocks_sg"]
	key_name	= "machi"
	tags = {Name = "VPN"}
}

resource "aws_security_group" "shadowsocks_sg" {
  name        = "shadowsocks_sg"
  description = "Allow Shadowsocks traffic"
  
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
