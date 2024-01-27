import React, { FC, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { VideoProps } from "../components/Types";
import { formatNumber } from "../components/helpers";
import getAllVideos from "../services/getAllVideos";
import CustomNav from "../components/CustomNav";

const Result = () => {
  // handle redux
  const videoList = useSelector((state: any) => state?.videos?.videoList);


  useEffect(()=>{
    getAllVideos()
  },[])
  
  //   handle header data
  const TableHeader :FC = () => {
    return (
      <thead
        style={{
          backgroundColor: "#000",
        }}
      >
        <tr>
          <th>Rank</th>
          <th
            style={{
              width: "30%",
              alignItems: "center",
            }}
          >
            Title
          </th>
          <th
            style={{
              width: "20%",
            }}
          >
            Thumbnail
          </th>
          <th>Views</th>
          <th>Likes</th>
          <th>Updated On</th>
          <th>Estimated Earning</th>
        </tr>
      </thead>
    );
  };

  //   Handle Rows data
  const HandleRowData: FC<{ data: VideoProps; index:number }> = ({ data, index }) => {
    let id = index + 1;


    if (videoList?.length > 1 && id !==1 )
    {
  return (
    <tr style={{ backgroundColor: "red" }}>
      <td>{id}</td>
      <td>{data.title}</td>
      <td>
        <img
          style={{
            boxShadow: "1px 2px 3px #000000",
            borderRadius: 8,
          }}
          height={100}
          width={140}
          src={data?.thumbnail ? data?.thumbnail : ""}
          alt={data?.title}
        />
      </td>

      <td>{formatNumber(data.views)}</td>
      <td>{formatNumber(data.likes)}</td>
      <td>{data.updatedOn}</td>
      <td>₹ {formatNumber(data?.estimatedEarning)}</td>
    </tr>
  );
    }
    else{
        return null;
    }
    
  };



  const TopEarningVideo  = () => {


    if(videoList?.length > 1)
    {
        let data :VideoProps= videoList['0']
        return (
          <div
            style={{
              backgroundColor: "#212529",
              height: 400,
              marginTop: 20,
              borderRadius: 6,

              boxShadow: "1px 2px 3px rgba(0,0,0,0.7)",
            }}
          >
            <div
              style={{
                display: "flex",
                position: "absolute",
                top: 200,
                width: 100,
                height: 40,
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Ubuntu",
                fontSize: 30,
                boxShadow: "1px 2px 3px rgba(0,0,0,0)",
              }}
            >
              #1
            </div>
            <div
              style={{
                display: "flex",
                position: "absolute",
                top: 280,
                width: 200,
                height: 50,
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: "#1E3264",
                border: "1px solid white",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Ubuntu",
                fontSize: 30,
                color: "white",
                boxShadow: "1px 2px 3px rgba(0,0,0,0)",
              }}
            >
              ₹ {formatNumber(data?.estimatedEarning)}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                height: "100%",
                alignItems: "center",
              }}
            >
              <div
                style={
                  {
                    //   width: "50%",
                  }
                }
              >
                <img
                  style={{
                    boxShadow: "1px 2px 3px #000000",
                    borderRadius: 8,
                  }}
                  height={200}
                  width={300}
                  src={data?.thumbnail ? data?.thumbnail : ""}
                  alt={data?.title}
                />
              </div>
              <div
                style={{
                  //   width: "50%",
                  marginLeft: 20,
                  color: "white",
                  fontSize: 24,
                }}
              >
                <p>{data?.title}</p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Views : {formatNumber(data?.views)}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Likes : {formatNumber(data?.likes)}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  Updated On : {data?.updatedOn}
                </p>
              </div>
            </div>
          </div>
        );
    }
    return null

  }
  return (
    <>
      <CustomNav navTo={""} />
      <Container>


<TopEarningVideo/>

        <div>
          <Table responsive="sm" className="mt-5" bgcolor="dark">
            <TableHeader />
            <tbody>
              {videoList.map((data: VideoProps, index: any) => {
                return (
                  <HandleRowData
                    data={data}
                    key={data?.videoUrl}
                    index={index}
                  />
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default Result;
