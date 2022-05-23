import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import useMethods from "../utils/useMethods";

const InformationForm = () => {
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
        <div className="w-full max-w-xs mx-auto bg-inherit flex flex-col gap-2">
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
    cgpa: null,
    year_pass: null,
    present_year: null,
    previous_cgpa: null,
  },
  job_experience: {
    on: false,
    parmanent: false,
    company_name: null,
    designation: null,
    joining_data: null,
    ending_date: null,
    details_of_job: null,
  },
  skill: {
    subject: null,
    rating: null,
    about_skill: null,
  },
  want_skill: {
    subject: null,
  },
};
