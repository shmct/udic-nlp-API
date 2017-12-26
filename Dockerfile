# This dockerfile uses the ubuntu image
# VERSION 2 - EDITION 1
# Author: davidtnfsh
# Command format: Instruction [arguments / command] ..

# 基本映像檔，必須是第一個指令
FROM davidtnfsh/python

MAINTAINER davidtnfsh davidtnfsh@gmail.com

ENV LANG=C.UTF-8

# 更新映像檔的指令
RUN mkdir /code
WORKDIR /code
ADD . /code/

# to install numpy, scipy
RUN apt-get update
RUN apt-get -y install libblas-dev liblapack-dev libatlas-base-dev gfortran 

RUN apt-get -y install sudo wget opencc

# to install npm
RUN apt-get -y install curl python-software-properties
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get -y install nodejs

RUN pip3 install -r requirements.txt
# for KCM
RUN git clone https://github.com/UDICatNCHU/KCM.git; cd KCM; python3 setup.py install

# for kcem
RUN pip3 install git+git://github.com/yichen0831/opencc-python.git@master#egg=opencc-python
RUN pip3 install git+git://github.com/attardi/wikiextractor.git@2a5e6aebc030c936c7afd0c349e6826c4d02b871