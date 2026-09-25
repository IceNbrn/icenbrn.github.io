import type { ReactNode } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import ProjectHeader from '../../components/ProjectHeader.tsx';
import { personalProjects } from '../../data';
import ScrollLink from '../../components/ScrollLink.tsx';
import { tmwWebsiteImages } from '../../assets/images/tmwwebsite-images.ts';
import { ImageWithFullscreen } from '../../components/ImageWithFullscreen.tsx';

export const Route = createFileRoute('/projects/tmwwebsite')({
  component: TmwWebsite,
});

function Section({
                   id,
                   title,
                   children,
                 }: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
      <div className="row">
        <div className="col-md-12">
          <div className="card-icen container">
            <div className="card-body">
              <h5 id={id}>
                <b>{title}</b>
              </h5>
              {children}
            </div>
          </div>
        </div>
      </div>
  );
}

function TmwWebsite() {
  const project = personalProjects.find((c) => c.name.includes('TMW Website'))!;

  return (
      <>
        <ProjectHeader data={project} />

        <div className="album py-5 bg-icen">
          <div className="container text-start">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-1">
              <div className="col">
                {/* ================= INTRO / STORY ================= */}
                <Section id="story" title="Story">
                  <p className="card-text">
                    This is a full-stack web application and .NET API that I built for my private
                    gaming community. It is used alongside a custom Discord bot to provide community
                    tools, activity tracking, and internal management features.
                  </p>

                  <p className="card-text">
                    I created the project to learn modern web development while building a practical
                    system for real users. It uses a{' '}
                    <b>Next.js, React, TypeScript, and Tailwind CSS</b> frontend, along with a{' '}
                    <b>C#, .NET, and Entity Framework Core</b> backend.
                  </p>

                  <p className="card-text">
                    The application includes <b>role-based authentication</b>, a{' '}
                    <b>community dashboard</b>, <b>betting history</b>, <b>Qwerty Gifts analytics</b>,{' '}
                    <b>Discord usage graphs</b>, a <b>TMW Balls leaderboard</b>, <b>public profiles</b>,{' '}
                    <b>admin user management</b>, and <b>paginated transaction history</b>.
                  </p>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <figure className="figure">
                        <ImageWithFullscreen
                            src={tmwWebsiteImages.mainPage}
                            alt="TMW Website main page"
                        />
                        <figcaption className="figure-caption text-center">
                          Main page
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-6">
                      <figure className="figure">
                        <ImageWithFullscreen
                            src={tmwWebsiteImages.dashboard}
                            alt="TMW Website dashboard"
                        />
                        <figcaption className="figure-caption text-center">
                          Dashboard
                        </figcaption>
                      </figure>
                    </div>
                  </div>

                  <h6>Pages:</h6>
                  <div className="col-md-5">
                    <ul>
                      <li>
                        <ScrollLink to="dashboard">Dashboard</ScrollLink>
                      </li>
                      <li>
                        <ScrollLink to="profile">Profile</ScrollLink>
                      </li>
                      <li>
                        <ScrollLink to="active-recent-bets">Active & Recent Bets</ScrollLink>
                      </li>
                      <li>
                        <ScrollLink to="qwertygifts">QwertyGifts</ScrollLink>
                      </li>
                      <li>
                        <ScrollLink to="users">Users</ScrollLink>
                      </li>
                      <li>
                        <ScrollLink to="transactions">My Transactions</ScrollLink>
                      </li>
                    </ul>
                  </div>

                  <strong><ScrollLink to="showcase">Video Showcase</ScrollLink></strong>
                </Section>



                {/* ================= AUTHENTICATION ================= */}
                <Section id="authentication" title="Role-based Authentication">
                  <p className="card-text text-muted mb-4">
                    The application implements Role-Based Access Control across three privilege tiers:
                    <span className="badge bg-secondary ms-1 me-1">Member</span>
                    <span className="badge bg-primary me-1">Admin</span>
                    <span className="badge bg-danger">Owner</span>
                  </p>

                  <div className="mb-4">
                    <h6>How Authentication & Roles Work</h6>
                    <p className="card-text text-secondary mb-2">
                      Users sign in via standard authentication with discord account handled through our Next.js frontend and .NET Web API backend.
                      When an authenticated user makes an API request or navigates the application, the .NET backend queries
                      the database to verify their assigned role directly from the <code>Users</code> table on every request,
                      ensuring real-time permission accuracy.
                    </p>
                    <p className="card-text text-secondary mb-2">
                      The Next.js frontend uses authorization helpers to conditionally render UI controls (such as action buttons)
                      and restrict access to specific views. If a user attempts to access an unauthorized route or trigger a restricted API
                      endpoint, the application redirects them to an Access Denied state or displays an error alert.
                    </p>
                    <p className="card-text text-muted small">
                      <strong>Note on Architecture:</strong> Checking the database on every request is intentionally chosen for this project
                      because the application is built for a small user base (my private gaming community). For a bigger audience
                      I would use role claims into signed JWT tokens to optimize response times and reduce database load.
                    </p>
                  </div>

                  <div className="table-responsive my-4">
                    <table className="table table-bordered table-striped align-middle">
                      <thead className="table-dark">
                      <tr>
                        <th>Role</th>
                        <th>Permissions & Capabilities</th>
                        <th>Restrictions</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>
                          <span className="badge bg-secondary">Member</span>
                        </td>
                        <td>
                          <ul className="mb-0 ps-3">
                            <li>Create and close own bets</li>
                            <li>Place bets</li>
                            <li>View user profiles</li>
                          </ul>
                        </td>
                        <td className="text-muted">Cannot delete bets or edit/delete other users.</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="badge bg-primary">Admin</span>
                        </td>
                        <td>
                          <ul className="mb-0 ps-3">
                            <li>All Member capabilities</li>
                            <li>Edit user details and delete user accounts</li>
                            <li>Delete any bet</li>
                          </ul>
                        </td>
                        <td>
                          <span className="text-danger fw-semibold">Cannot edit or delete Owner accounts.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="badge bg-danger">Owner</span>
                        </td>
                        <td>
                          <ul className="mb-0 ps-3">
                            <li>Unrestricted control over all users, bets, and system settings</li>
                          </ul>
                        </td>
                        <td className="text-muted">None (Full administrative access).</td>
                      </tr>
                      </tbody>
                    </table>

                    <p className="card-text text-muted small">
                      <strong>Note on owner:</strong> I'm trying to replicate how discord handles owner's permissions.
                    </p>
                  </div>
                </Section>

                {/* ================= DASHBOARD ================= */}
                <Section id="dashboard" title="Community Dashboard">
                  <p className="card-text">
                    The Dashboard gives users a resume of what's happening in the community, it shows the recent bets, who has gifted more qwerty gifts, the average
                    amount spent on bets, the discord usage, and also gets the fastest times from our mini game (TMW Balls).
                    In the future it will support a Racing Schedule and a Leaderboard.
                  </p>

                  <div className="row">
                    <div className="col-12">
                      <div className="card shadow-sm overflow-hidden">
                        <ImageWithFullscreen
                            src={tmwWebsiteImages.dashboard2}
                            alt="Community Dashboard"
                        />

                        <div className="card-body py-3">
                          <h6 className="mb-0 text-center fw-semibold">
                            Community Dashboard
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* ================= PROFILE ================= */}
                <Section id="profile" title="Public Profiles">
                  <p className="card-text">
                    The user profile shows how many gifts a user received and gifted, the bets statistics, and top 3 times / last 3 races from tmw balls mini game.
                  </p>

                  <p className="card-text">
                    As of now is a bit empty, but that will change when I have more data to display.
                  </p>

                  <div className="row">
                    <div className="col-12">
                      <div className="card shadow-sm overflow-hidden">
                        <ImageWithFullscreen
                            src={tmwWebsiteImages.profile}
                            alt="User profile"
                        />

                        <div className="card-body py-3">
                          <h6 className="mb-0 text-center fw-semibold">
                            User Profile
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* ================= ACTIVE & RECENT BETS ================= */}
                <Section id="active-recent-bets" title="Active & Recent Bets">
                  <p className="card-text">
                    There are two pages, one for active bets and another recent bets.
                    Active Bets: Only shows bets that users can still place a bet and has pagination.
                    Recent Bets: Shows only the last 4 bets, if one of them is open it will show buttons to place a bet, if not, will show the winner.
                  </p>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <figure className="figure">
                        <ImageWithFullscreen
                            src={tmwWebsiteImages.activeBets}
                            alt="TMW Website Active Bets"
                        />
                        <figcaption className="figure-caption text-center">
                          Active Bets
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-6">
                      <figure className="figure">
                        <ImageWithFullscreen
                            src={tmwWebsiteImages.recentBets}
                            alt="TMW Website Recent Bets"
                        />
                        <figcaption className="figure-caption text-center">
                          Recent Bets
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </Section>

                {/* ================= QWERTYGIFTS ================= */}
                <Section id="qwertygifts" title="Qwerty Gifts Analytics">
                  <p className="card-text">
                    Displays the number of Qwerty gift senders over the past 5 months and how many they sent.
                  </p>

                  <div className="row">
                    <div className="col-12">
                      <div className="card shadow-sm overflow-hidden">
                        <ImageWithFullscreen
                            src={tmwWebsiteImages.qwertyGifts}
                            alt="Qwerty Gifts"
                        />

                        <div className="card-body py-3">
                          <h6 className="mb-0 text-center fw-semibold">
                            Qwerty Gifts Chart
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* ================= USERS ================= */}
                <Section id="users" title="Admin User Management">
                  <p className="card-text">
                    In the users tab admins can see all the users and if they select one of them they can see details and edit role or delete a user.
                  </p>

                  <div className="col-md-5">
                    <ul>
                      <li>View users</li>
                      <li>Delete users</li>
                      <li>Manage roles</li>
                    </ul>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <figure className="figure">
                        <ImageWithFullscreen
                            src={tmwWebsiteImages.adminUsers}
                            alt="TMW Website Admin Users"
                        />
                        <figcaption className="figure-caption text-center">
                          Admin Users
                        </figcaption>
                        <p className="text-center card-text text-muted small">
                          Screenshot blurred on purpose to not leak users data
                        </p>
                      </figure>
                    </div>
                    <div className="col-md-6">
                      <figure className="figure">
                        <ImageWithFullscreen
                            src={tmwWebsiteImages.adminEdit}
                            alt="TMW Website Admin Edit"
                        />
                        <figcaption className="figure-caption text-center">
                          Admin Edit
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </Section>

                {/* ================= TRANSACTIONS ================= */}
                <Section id="transactions" title="Paginated Transaction History">
                  <p className="card-text">
                    The transaction table provides a clear overview of all incoming and outgoing credits.
                  </p>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <figure className="figure">
                        <ImageWithFullscreen
                            src={tmwWebsiteImages.transactions}
                            alt="TMW Website Transactions"
                        />
                        <figcaption className="figure-caption text-center">
                          Transactions
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-md-6">
                      <figure className="figure">
                        <ImageWithFullscreen
                            src={tmwWebsiteImages.transactionsFilter}
                            alt="TMW Website Transactions Filter"
                        />
                        <figcaption className="figure-caption text-center">
                          Transactions Filter
                        </figcaption>
                      </figure>
                    </div>
                  </div>

                  <p className="card-text">
                    The pagination is done server-side, the client sends <code>page</code>, <code>size</code> and <code>transaction type</code>, the service in the API builds
                    a query with Skip & Take that will return the page of rows alongside a <code>totalRecords</code>
                  </p>

                  <p className="card-text">Ordering is available but that's done on the client side and will only reorder the current page.</p>

                  <div className="row">
                    <div className="col-12">
                      <div className="card shadow-sm overflow-hidden">
                        <ImageWithFullscreen
                            src={tmwWebsiteImages.transactionsPagination}
                            alt="TMW Website Transactions Pagination"
                        />

                        <div className="card-body py-3">
                          <h6 className="mb-0 text-center fw-semibold">
                            Transactions Pagination
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* ================= TECH STACK ================= */}
                <Section id="tech-stack" title="Tech Stack">
                  <div className="col-md-5">
                    <h6>Frontend</h6>
                    <ul>
                      <li>Next.js</li>
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                    </ul>

                    <h6>Backend</h6>
                    <ul>
                      <li>C#</li>
                      <li>.NET</li>
                      <li>Entity Framework Core</li>
                    </ul>

                    <h6>Other</h6>
                    <ul>
                      <li>Discord integration with BetterAuth</li>
                      <li>REST API</li>
                      <li>Role-based access control</li>
                    </ul>
                  </div>
                </Section>

                {/* ================= FOR THE FUTURE ================= */}
                <Section id="for-the-future" title="For the Future">
                  <p>I'd like to add:</p>

                  <div className="col-md-5">
                    <ul>
                      <li>More admin tooling</li>
                      <li>Settings</li>
                    </ul>
                  </div>
                </Section>

                <Section id="showcase" title="Video Showcase">
                  <div className="video-wrapper mt-3">
                    <iframe
                        src="https://www.youtube.com/embed/e0l9F1vfU8I"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                  </div>
                </Section>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}