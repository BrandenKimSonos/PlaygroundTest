FROM ubuntu:bionic

RUN apt-get update
RUN apt-get install python3 python3-pip -y

ADD django-polls/requirements.txt /app/requirements.txt

RUN set -ex \
    && apt-get install python3-venv -y \
    && python3 -m venv /env \
    && pip3 install --upgrade pip \
    && pip3 install --upgrade setuptools \
    && pip3 install --no-cache-dir -r /app/requirements.txt \
    && runDeps="$(scanelf --needed --nobanner --recursive /env \
        | awk '{ gsub(/,/, "\nso:", $2); print "so:" $2 }' \
        | sort -u \
        | xargs -r apk info --installed \
        | sort -u)" 
    # && apt-get install --virtual rundeps $runDeps \
    # && apt-get remove .build-deps

ADD django-polls /app
WORKDIR /app

ENV VIRTUAL_ENV /env
ENV PATH /env/bin:$PATH

EXPOSE 8000
EXPOSE 50051

CMD ["gunicorn", "--bind", ":8000", "--workers", "3", "mysite.wsgi:application"]