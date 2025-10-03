import React from 'react'
import { motion } from 'framer-motion'
import banner from '../src/assets/about-banner.webp'
import detail from '../src/assets/blog-details.jpg'
import team4 from '../src/assets/blog-grid-4.jpg'
import { FaFacebookF, FaInstagram, FaTiktok, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { CiCalendar, CiUser } from "react-icons/ci";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

function BlogSingle() {
  return (
    <>
      {/* Banner */}
      <motion.div
      
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full overflow-hidden"
      >
        <div
          className="pt-20 md:pt-32 pb-20 bg-cover bg-center bg-no-repeat w-full h-[250px] md:h-[400px]"
          style={{ backgroundImage: `url(${banner})` }}
        />
      </motion.div>

      {/* Content Section */}
      <div className="container mx-auto -mt-16 px-4 md:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-12 bg-white shadow-xl gap-8 md:p-10 p-5 rounded-2xl overflow-hidden">
          
          {/* Main Blog */}
          <motion.div
            className="md:col-span-8 flex flex-col gap-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <motion.h3
              className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#454444] leading-snug"
              variants={fadeUp}
            >
              How Technology is Transforming the Industry
            </motion.h3>

            <motion.div
              className="flex flex-wrap items-center gap-5 text-gray-600 text-sm md:text-base"
              variants={fadeUp}
            >
              <div className="flex items-center gap-2">
                <CiCalendar size={22} /> February 28, 2024
              </div>
              <span className="w-[1px] h-5 bg-gray-300" />
              <div className="flex items-center gap-2">
                <CiUser size={22} /> Admin
              </div>
            </motion.div>

            <motion.img
              src={detail}
              alt="Blog Detail"
              className="w-full rounded-xl shadow-md my-4"
              variants={fadeUp}
            />

            <motion.p
              className="text-gray-700 leading-relaxed text-base md:text-lg"
              variants={fadeUp}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi obcaecati
              ratione exercitationem facilis omnis doloremque, iusto expedita architecto, fugit
              magnam? Accusamus fugit ducimus labore, optio rerum iure assumenda vel temporibus
              quaerat minus maiores...
            </motion.p>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="md:col-span-4 flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* Social Icons */}
            <motion.div variants={fadeUp}>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: <FaFacebookF size={18}  />, color: "#3b5998" },
                  { icon: <FaInstagram size={18} color='#fff' />, gradient: "bg-gradient-to-b from-[#8a3ab9] via-[#e95950] to-[#fccc63]" },
                  { icon: <FaXTwitter size={18} />, color: "#555555" },
                  { icon: <FaTiktok size={18} color='#fff' />, gradient: "bg-gradient-to-b from-[#25f4ee] via-[#000] to-[#fe2c55]" },
                  { icon: <FaPinterest size={18} />, color: "#cb2027" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border transition cursor-pointer hover:text-white ${item.color ? `hover:bg-[${item.color}]` : item.gradient}`}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Related Posts */}
            <motion.div variants={fadeUp}>
              <h4 className="text-2xl font-semibold">Related Posts</h4>
              
              <div className="mt-5 space-y-6">
                {/* Big Post */}
                <motion.div
                  className="flex flex-col gap-3 group border-b pb-5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={team4} alt="Team" className="w-full rounded-lg shadow-md" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2"><CiCalendar size={18} /> Feb 28, 2024</div>
                    <div className="flex items-center gap-2"><CiUser size={18} /> Admin</div>
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold group-hover:text-[#c5a980] cursor-pointer transition">
                    How Technology is Transforming the Industry
                  </h4>
                </motion.div>

                {/* Small Post */}
                <motion.div
                  className="grid grid-cols-2 gap-4 items-start"
                  whileHover={{ scale: 1.01 }}
                >
                  <img src={team4} alt="Team" className="rounded-lg shadow-md" />
                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2"><CiCalendar size={18} /> Feb 28, 2024</div>
                    <div className="flex items-center gap-2"><CiUser size={18} /> Admin</div>
                    <h4 className="text-base font-semibold hover:text-[#c5a980] cursor-pointer transition">
                      How Technology is Transforming the Industry
                    </h4>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default BlogSingle
