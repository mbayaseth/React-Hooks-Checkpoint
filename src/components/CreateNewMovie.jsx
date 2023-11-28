import React, { useState } from "react";
import { Button, Modal, Input, Rate, message } from "antd";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import validator from "validator";

const CreateNewMovie = ({ setMyMovies, setRandom, memorizedMovies }) => {
  const [movieInfo, setMovieInfo] = useState({
    id: Math.random(),
    title: "",
    description: "",
    posterUrl: "",
    rating: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const handleInput = (event) => {
    const { id, value } = event.target;
    setMovieInfo((prevalue) => {
      return {
        ...prevalue,
        [id]: value,
      };
    });
  };

  const handleRate = (value) => {
    setMovieInfo((preValue) => ({
      ...preValue,
      rating: value,
    }));
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    // lets validate all our inpute
    if (!validator.isURL(movieInfo.posterUrl)) {
      messageApi.open({
        type: "error",
        content: "please provide a valid image address",
      });
      return;
    }

    if (validator.isEmpty(movieInfo.title)) {
      messageApi.open({
        type: "error",
        content: "please provide a movie title",
      });

      return;
    }

    if (movieInfo.rating < 1) {
      messageApi.open({
        type: "error",
        content: "please rate a movie",
      });
      return;
    }

    if (validator.isEmpty(movieInfo.description)) {
      messageApi.open({
        type: "error",
        content: "please provide a movie Description",
      });

      return;
    }

    messageApi.open({
      type: "success",
      content: "Your movie is added successful",
    });

    setMyMovies((preview) => [movieInfo, ...memorizedMovies.myMemorizedmovies]);
    setRandom(Math.random());

    //now reset input
    setMovieInfo({
      id: Math.random(),
      title: "",
      description: "",
      posterUrl: "",
      rating: "",
    });

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        // this button has an icon for show modal
        type="primary"
        icon={<VideoCameraAddOutlined />}
        onClick={showModal}
      >
        Add Movies
      </Button>

      <Modal
        // all the ok cancel inputs modal
        title="Add Movies"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {contextHolder}
        <div className="space-y-3">
          <Input
            placeholder="movie poster url"
            id="posterUrl"
            onChange={handleInput}
            value={movieInfo.posterUrl}
          />

          <div>
            <Input
              // handle movie title
              placeholder="movie title"
              id="title"
              onChange={handleInput}
              value={movieInfo.title}
            />
            <div className="shadow my-4 rounded-md p-2 w-fit">
              <p>Rate movei</p>
              <Rate onChange={(value) => handleRate(value)} defaultValue={1} />
            </div>
          </div>
          <Input.TextArea
            rows={4}
            placeholder="movie description"
            id="description"
            onChange={handleInput}
            value={movieInfo.description}
          />
        </div>
      </Modal>
    </>
  );
};
export default CreateNewMovie;
