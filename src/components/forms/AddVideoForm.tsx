import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Input from "../Input";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";
import getYouTubeMetadata from "../../services/getYouTubeMetadata";
import Loader from "../Loader";
import addVideoApi from "../../services/addVideoApi";

// https://www.youtube.com/watch?v=xanNgBqNetA
//   https://www.youtube.com/watch?v=deTVgOf2cWs
export default function AddVideoForm() {


  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (data: string) => {
    if (data) {
      setInputValue(data);
      setError("");
    } else {
      setInputValue(data);
      setError("Please enter youtube link");
    }
  };

  const validateInput = () => {
    if (!inputValue.includes("youtube")) {
      setError("Please enter a valid YouTube link.");
      return false;
    } else {
      setIsLoading(true);

      getYouTubeMetadata(inputValue).then((res) => {
        if (res) {
          let estimatedEarning =
            Math.min(res?.subscriberCount, res?.views) +
            10 * res?.comments +
            5 * res?.likes;

          let payload = {
            title: res?.title,
            youtubeUrl: res?.youtubeUrl,
            videoUrl: res?.videoUrl,
            description: res?.description,
            thumbnail: res?.thumbnail,
            views: res?.views,
            likes: res?.likes,
            subscriberCount: res?.subscriberCount,
            comments: res?.comments,
            estimatedEarning: estimatedEarning,
          };

          addVideoApi(payload).then((res) => {
            if (res) {
              setTimeout(() => {
                setIsLoading(false);
                navigate("/collection");
              }, 2400);
            } else {
              setIsLoading(false);
            }
          });
        }
      });
    }
  };

  const handleAdd = () => {
    if (inputValue) {
      validateInput();
    }
  };

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  } else {
    return (
      <Form>
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col>
            <Input
              required
              placeholder="Enter youtube link here..."
              onChange={(e: any) => handleChange(e.target.value)}
            />
          </Col>
          <Col>
            <CustomButton handleAdd={handleAdd} buttonText="+ Add Video Link" />
          </Col>
        </Row>

        {/* error */}
        {error && (
          <p
            style={{
              fontFamily: "Ubuntu",
              padding: 10,
              fontSize: "14px",
              color: "#D60000",
            }}
          >
            {error}
          </p>
        )}
      </Form>
    );
  }
}
