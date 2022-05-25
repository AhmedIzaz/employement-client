import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import useMethods from "../utils/useMethods";

const InformationForm = () => {
  const [show_educational_form, set_show_educational_form] = useState(false);
  const [show_job_experience_form, set_show_job_experience_form] =
    useState(false);
  const [show_skill_experience_form, set_show_skill_experience_form] =
    useState(false);
  const [agree, set_agree] = useState(false);
  //
  //
  //
  const [data, setData] = useState(initial_state);
  const [division_list, setDivisionList] = useState([]);
  const [district_list, setDistrictList] = useState([]);
  const [sub_district_list, setSubDistrictList] = useState([]);
  const { get_division_list, get_district_list, on_information_submit } =
    useMethods();

  //
  //
  //
  //

  const on_data_change = (e) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  //
  //
  //
  //
  const on_division_change = async (e) => {
    setData((prev) => ({ ...prev, division: e.target.value }));
    setDistrictList(await get_district_list(e.target.value));
  };

  const on_district_change = async (e) => {
    setData((prev) => ({ ...prev, district: e.target.value }));
    setSubDistrictList(
      district_list.find((item) => item.district == e.target.value).upazilla
    );
  };
  //
  //
  //
  // reseting data of education, job, skill information
  const reset_educational_qualification = () => {
    set_show_educational_form(false);
    setData((prev) => ({
      ...prev,
      educational_qualification: {
        degree: null,
        board: null,
        institute: null,
        cgpa: null,
        year_pass: null,
        present_year: null,
        previous_cgpa: null,
      },
    }));
  };
  const reset_job_experience = () => {
    set_show_job_experience_form(false);
    setData((prev) => ({
      ...prev,
      job_experience: {
        on: false,
        parmanent: false,
        company_name: null,
        designation: null,
        joining_data: null,
        ending_date: null,
        details_of_job: null,
      },
    }));
  };
  const reset_skill = () => {
    set_show_skill_experience_form(false);
    setData((prev) => ({
      ...prev,
      skill: { subject: null, rating: null, about_skill: null },
    }));
  };
  //
  //
  //
  useEffect(async () => {
    setDivisionList(await get_division_list());
  }, []);
  //
  //
  //
  //

  return (
    <div className="w-full max-w-4xl mx-auto rounded-lg shadow-md bg-white p-4 my-6">
      <h2 className="bg-inherit text-2xl text-center font-semibold p-4">
        তথ্য পুরন করুন
      </h2>
      <form
        onSubmit={(e) => on_information_submit(e, data)}
        className="bg-inherit flex flex-col md:flex-row md:flex-wrap  items-center gap-6"
      >
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900">
            Full Name
          </label>
          <input
            onChange={on_data_change}
            type="text"
            name="full_name"
            value={data.full_name}
            placeholder="full name"
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600 "
          />
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900">
            Full Name English
          </label>
          <input
            onChange={on_data_change}
            type="text"
            name="full_name_english"
            value={data.full_name_english}
            placeholder="full name english"
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
          />
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900">
            Father Name
          </label>
          <input
            onChange={on_data_change}
            type="text"
            name="father_name"
            value={data.father_name}
            placeholder="father name"
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
          />
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900">
            Father Name English
          </label>
          <input
            onChange={on_data_change}
            type="text"
            name="father_name_english"
            value={data.father_name_english}
            placeholder="father name english"
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
          />
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900">
            Mother Name
          </label>
          <input
            onChange={on_data_change}
            type="text"
            name="mother_name"
            value={data.mother_name}
            placeholder="mother name"
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
          />
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900">
            Mother Name English
          </label>
          <input
            onChange={on_data_change}
            type="text"
            name="mother_name_english"
            value={data.mother_name_english}
            placeholder="mother name english"
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
          />
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900">
            Mobile Number
          </label>
          <input
            onChange={on_data_change}
            type="text"
            name="mobile"
            value={data.mobile}
            placeholder="mobile number"
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
          />
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900">
            E-mail Address
          </label>
          <input
            onChange={on_data_change}
            type="text"
            name="email"
            value={data.email}
            placeholder="valid email address"
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
          />
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900">
            Present Address
          </label>
          <input
            onChange={on_data_change}
            type="text"
            name="present_address"
            value={data.present_address}
            placeholder="present address"
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
          />
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900">
            Parmanent Address
          </label>
          <input
            onChange={on_data_change}
            type="text"
            name="parmanent_address"
            value={data.parmanent_address}
            placeholder="parmanent address"
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
          />
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900">
            Division
          </label>
          <select
            onChange={on_division_change}
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
          >
            {division_list.map((division) => (
              <option value={division.division}>{division.division}</option>
            ))}
          </select>
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900">
            District
            {!data.division && (
              <span className="text-slate-600 text-base mx-4 bg-inherit">
                (At first select a division)
              </span>
            )}
          </label>
          <select
            disabled={data.division ? false : true}
            onChange={on_district_change}
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
          >
            {district_list.map((district) => (
              <option value={district.district}>{district.district}</option>
            ))}
          </select>
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900">
            Upazilla{" "}
            {!data.district && (
              <span className="text-slate-600 text-base mx-4 bg-inherit">
                At first select a division
              </span>
            )}
          </label>
          <select
            disabled={data.district ? false : true}
            onChange={on_data_change}
            name="sub_district"
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600 "
          >
            {sub_district_list.map((sub_district) => (
              <option value={sub_district}>{sub_district}</option>
            ))}
          </select>
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <h3 className="font-serif text-xl text-slate-900 bg-inherit">
            Give Identity Type and Number
          </h3>
          <div className="bg-inherit flex justify-evenly items-center font-serif text-lg text-slate-600">
            <div className="bg-inherit flex gap-2 items-center">
              <input
                type="radio"
                name="identity"
                value="NID"
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    identity: { ...prev.identity, of: "NID" },
                  }))
                }
              />
              <p className="bg-inherit">NID</p>
            </div>
            <div className="bg-inherit flex gap-2 items-center">
              <input
                type="radio"
                name="identity"
                value="Birth Certificate"
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    identity: { ...prev.identity, of: "Birth Certificate" },
                  }))
                }
              />
              <p className="bg-inherit">Birth Certificate</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2 ">
          {data.identity.of ? (
            <label className="bg-inherit font-serif text-xl text-slate-900">
              Please give your {data.identity.of} number
            </label>
          ) : (
            <p className="bg-inherit font-serif text-xl text-slate-900">
              At first give the identity type
            </p>
          )}
          <input
            disabled={data.identity.of ? false : true}
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
            type="text"
            value={data.identity.number}
            placeholder={
              data.identity.of
                ? `${data.identity.of} number ....`
                : "please select identity type!"
            }
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                identity: { ...prev.identity, number: e.target.value },
              }))
            }
          />
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <h3 className="font-serif text-xl text-slate-900 bg-inherit">
            Have any educational requirement?
          </h3>
          <div className="bg-inherit flex justify-evenly items-center font-serif text-lg text-slate-600">
            <div className="bg-inherit flex gap-2 items-center">
              <input
                type="radio"
                name="educational-option"
                onChange={() => set_show_educational_form(true)}
              />
              <p className="bg-inherit">Yes</p>
            </div>
            <div className="bg-inherit flex gap-2 items-center">
              <input
                type="radio"
                name="educational-option"
                onChange={() => reset_educational_qualification()}
              />
              <p className="bg-inherit">No</p>
            </div>
          </div>
        </div>
        {show_educational_form && (
          <>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
              <label className="bg-inherit font-serif text-xl text-slate-900">
                Educational Qualification
              </label>
              <select
                onChange={(e) => {
                  e.target.value == 0
                    ? setData((prev) => ({
                        ...prev,
                        educational_qualification: {
                          ...prev.educational_qualification,
                          degree: null,
                        },
                      }))
                    : setData((prev) => ({
                        ...prev,
                        educational_qualification: {
                          ...prev.educational_qualification,
                          degree: e.target.value,
                        },
                      }));
                }}
                className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
              >
                <option value={0} selected>
                  Certificate
                </option>
                {educational_qualification_list.map((qualification) => (
                  <option value={qualification}>{qualification}</option>
                ))}
              </select>
            </div>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
              <label className="bg-inherit font-serif text-xl text-slate-900">
                {educational_qualification_list
                  .slice(0, 3)
                  .includes(data.educational_qualification.degree)
                  ? "Select Board"
                  : "Give College or University Name"}{" "}
                {!data.educational_qualification.degree && (
                  <span className=" text-sm text-rose-600 bg-inherit">
                    * select degree
                  </span>
                )}
              </label>
              {educational_qualification_list
                .slice(0, 3)
                .includes(data.educational_qualification.degree) ? (
                <select
                  disabled={
                    data.educational_qualification.degree ? false : true
                  }
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      educational_qualification: {
                        ...prev.educational_qualification,
                        degree: e.target.value,
                      },
                    }))
                  }
                  className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
                >
                  {division_list.map((division) => (
                    <option value={division.division}>
                      {division.division}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  disabled={
                    data.educational_qualification.degree ? false : true
                  }
                  value={data.educational_qualification.institute}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      educational_qualification: {
                        ...prev.educational_qualification,
                        institute: e.target.value,
                      },
                    }))
                  }
                  type="text"
                  placeholder="College or University"
                  className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
                />
              )}
            </div>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
              <label className="bg-inherit font-serif text-xl text-slate-900">
                Pass Year{" "}
                {!data.educational_qualification.degree && (
                  <span className=" text-sm text-rose-600 bg-inherit">
                    * select degree
                  </span>
                )}
              </label>
              <input
                value={data.educational_qualification.pass_year}
                disabled={data.educational_qualification.degree ? false : true}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    educational_qualification: {
                      ...prev.educational_qualification,
                      pass_year: e.target.value,
                    },
                  }))
                }
                placeholder="type year"
                type="text"
                className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
              />
            </div>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
              <label className="bg-inherit font-serif text-xl text-slate-900">
                CGPA or GPA
                {!data.educational_qualification.degree && (
                  <span className=" text-sm text-rose-600 bg-inherit">
                    * select degree
                  </span>
                )}
              </label>
              <input
                value={data.educational_qualification.cgpa}
                disabled={data.educational_qualification.degree ? false : true}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    educational_qualification: {
                      ...prev.educational_qualification,
                      cgpa: e.target.value,
                    },
                  }))
                }
                placeholder="cgpa"
                type="text"
                className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
              />
            </div>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
              <label className="bg-inherit font-serif text-xl text-slate-900">
                Present Educational Year (optional)
              </label>
              <input
                value={data.educational_qualification.present_year}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    educational_qualification: {
                      ...prev.educational_qualification,
                      present_year: e.target.value,
                    },
                  }))
                }
                placeholder="present year"
                type="text"
                className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
              />
            </div>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
              <label className="bg-inherit font-serif text-xl text-slate-900">
                Previous GPA or CGPA (optional)
              </label>
              <input
                value={data.educational_qualification.previous_cgpa}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    educational_qualification: {
                      ...prev.educational_qualification,
                      previous_cgpa: e.target.value,
                    },
                  }))
                }
                placeholder="previous gpa or cgpa"
                type="text"
                className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
              />
            </div>
          </>
        )}
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col  gap-2">
          <h3 className="font-serif text-xl text-slate-900 bg-inherit text-center">
            Have any job experience?
          </h3>
          <div className="bg-inherit flex justify-evenly place-items-center font-serif text-lg text-slate-600">
            <div className="bg-inherit flex gap-2 items-center">
              <input
                type="radio"
                name="job-experience-option"
                onChange={() => set_show_job_experience_form(true)}
              />
              <p className="bg-inherit">Yes</p>
            </div>
            <div className="bg-inherit flex gap-2 items-center">
              <input
                type="radio"
                name="job-experience-option"
                onChange={() => reset_job_experience()}
              />
              <p className="bg-inherit">No</p>
            </div>
          </div>
        </div>
        {show_job_experience_form && (
          <>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col  gap-2">
              <h3 className="font-serif text-xl text-slate-900 bg-inherit text-center">
                Job Type
              </h3>
              <div className="bg-inherit flex justify-evenly place-items-center font-serif text-lg text-slate-600">
                <div className="bg-inherit flex gap-2 items-center">
                  <input
                    type="radio"
                    name="job-type-option"
                    onChange={() =>
                      setData((prev) => ({
                        ...prev,
                        job_experience: {
                          ...prev.job_experience,
                          parmanent: true,
                        },
                      }))
                    }
                  />
                  <p className="bg-inherit">Parmanent</p>
                </div>
                <div className="bg-inherit flex gap-2 items-center">
                  <input
                    type="radio"
                    name="job-type-option"
                    onChange={() =>
                      setData((prev) => ({
                        ...prev,
                        job_experience: {
                          ...prev.job_experience,
                          parmanent: false,
                        },
                      }))
                    }
                  />
                  <p className="bg-inherit">Temporary</p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
              <label className="bg-inherit font-serif text-xl text-slate-900">
                Company Name
              </label>
              <input
                value={data.job_experience.company_name}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    job_experience: {
                      ...prev.job_experience,
                      company_name: e.target.value,
                    },
                  }))
                }
                placeholder="type company name"
                type="text"
                className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
              />
            </div>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
              <label className="bg-inherit font-serif text-xl text-slate-900">
                Designation
              </label>
              <input
                value={data.job_experience.designation}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    job_experience: {
                      ...prev.job_experience,
                      designation: e.target.value,
                    },
                  }))
                }
                placeholder="designation"
                type="text"
                className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
              />
            </div>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
              <label className="bg-inherit font-serif text-xl text-slate-900">
                Joining Date
              </label>
              <input
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    job_experience: {
                      ...prev.job_experience,
                      joining_date: e.target.value,
                    },
                  }))
                }
                placeholder="joining date"
                type="date"
                className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
              />
            </div>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
              <label className="bg-inherit font-serif text-xl text-slate-900">
                Ending Date
              </label>
              <input
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    job_experience: {
                      ...prev.job_experience,
                      ending_date: e.target.value,
                    },
                  }))
                }
                placeholder="ending date"
                type="date"
                className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
              />
            </div>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
              <label className="bg-inherit font-serif text-xl text-slate-900">
                Details about job
              </label>
              <input
                value={data.job_experience.details_of_job}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    job_experience: {
                      ...prev.job_experience,
                      details_of_job: e.target.value,
                    },
                  }))
                }
                placeholder="Details of job"
                type="text"
                className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
              />
            </div>
          </>
        )}
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col  gap-2">
          <h3 className="font-serif text-xl text-slate-900 bg-inherit text-center">
            Have any skills?
          </h3>
          <div className="bg-inherit flex justify-evenly place-items-center font-serif text-lg text-slate-600">
            <div className="bg-inherit flex gap-2 items-center">
              <input
                type="radio"
                name="skill-option"
                onChange={() => set_show_skill_experience_form(true)}
              />
              <p className="bg-inherit">Yes</p>
            </div>
            <div className="bg-inherit flex gap-2 items-center">
              <input
                type="radio"
                name="skill-option"
                onChange={() => reset_skill()}
              />
              <p className="bg-inherit">No</p>
            </div>
          </div>
        </div>
        {show_skill_experience_form && (
          <>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
              <label className="bg-inherit font-serif text-xl text-slate-900">
                Skill Subject
              </label>
              <select
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    skill: { ...prev.skill, subject: e.target.value },
                  }))
                }
                className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
              >
                {skill_subjects.map((skill) => (
                  <option value={skill}>{skill}</option>
                ))}
              </select>
            </div>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
              <label className="bg-inherit font-serif text-xl text-slate-900">
                Skill Rating
              </label>
              <select
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    skill: { ...prev.skill, rating: e.target.value },
                  }))
                }
                className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
              >
                {skill_rating.map((rate) => (
                  <option value={rate}>{rate}</option>
                ))}
              </select>
            </div>
            <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
              <label className="bg-inherit font-serif text-xl text-slate-900">
                Details about your skill
              </label>
              <input
                placeholder="about skill...."
                type="text"
                className=" bg-slate-100 outline-none p-2 rounded-md
                focus:border focus:border-sky-400 font-serif text-lg
                text-slate-600"
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    skill: {
                      ...prev.skill,
                      details_about_skill: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </>
        )}
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900 text-center">
            Want Skills?
          </label>
          <div className="bg-inherit flex justify-evenly place-items-center font-serif text-lg text-slate-600">
            <div className="bg-inherit flex gap-2 items-center">
              <input
                type="radio"
                name="want_skill-option"
                onChange={() =>
                  setData((prev) => ({
                    ...prev,
                    want_skill: { ...prev.want_skill, want: true },
                  }))
                }
              />
              <p className="bg-inherit">Yes</p>
            </div>
            <div className="bg-inherit flex gap-2 items-center">
              <input
                type="radio"
                name="want_skill-option"
                onChange={() =>
                  setData((prev) => ({
                    ...prev,
                    want_skill: { want: false, subject: null },
                  }))
                }
              />
              <p className="bg-inherit">No</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
          <label className="bg-inherit font-serif text-xl text-slate-900">
            select what kind of skill you want
          </label>
          <select
            disabled={data.want_skill.want ? false : true}
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                want_skill: { ...prev.want_skill, subject: e.target.value },
              }))
            }
            className=" bg-slate-100 outline-none p-2 rounded-md focus:border  focus:border-sky-400 font-serif text-lg text-slate-600"
          >
            {skill_subjects.map((skill) => (
              <option
                disabled={data.skill.subject === skill ? true : false}
                value={skill}
              >
                {skill}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-row place-items-start gap-4">
          <input
            type="checkbox"
            className="mt-2"
            onChange={() => set_agree((prev) => !prev)}
          />
          <p className="bg-inherit text-lg font-serif p-0">
            I agree with every terms and condition.
          </p>
        </div>
        <div className="w-full max-w-xs mx-auto ">
          <button className="text-center w-full px-4 py-2 rounded-md bg-green-400 text-white cursor-pointer hover:shadow-md font-serif font-bold" disabled={agree ? false : true}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InformationForm;

const initial_state = {
  full_name: null,
  full_name_english: null,
  father_name: null,
  father_name_english: null,
  mother_name: null,
  mother_name_english: null,
  mobile: null,
  email: null,
  present_address: null,
  parmanent_address: null,
  division: null,
  district: null,
  sub_district: null,
  identity: {
    of: null,
    number: null,
  },
  educational_qualification: {
    degree: null,
    board: null,
    institute: null,
    cgpa: null,
    pass_year: null,
    present_year: null,
    previous_cgpa: null,
  },
  job_experience: {
    on: false,
    parmanent: false,
    company_name: null,
    designation: null,
    joining_date: null,
    ending_date: null,
    details_of_job: null,
  },
  skill: {
    subject: null,
    rating: null,
    details_about_skill: null,
  },
  want_skill: {
    want: false,
    subject: null,
  },
};

//
//
//
const educational_qualification_list = [
  "PSC",
  "SSC",
  "HSC",
  "Diploma",
  "Bachelor",
  "Masters",
];

const skill_subjects = [
  "Computer",
  "Electrical",
  "Mechanical",
  "Vehicle Mechanic",
  "Arts and Crafts",
  "Farming",
  "Driving",
  "Entrepreneur",
  "Others",
];

const skill_rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
